import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
const source = readFileSync(new URL('../public/contact-card.js', import.meta.url), 'utf8');
function browser({ mobile = true, storage = true, cookies = true } = {}) {
  const data = new Map(); let cookie = ''; let shown = 0; let removed = 0;
  const events = {};
  const element = { setAttribute() {}, remove() { removed++; }, querySelector(tag) { return { addEventListener(type, fn) { events[tag] = fn; } }; } };
  const document = {
    get cookie() { return cookie; }, set cookie(value) { if (cookies) cookie = value.split(';')[0]; },
    getElementById() { return null; }, createElement() { return element; },
    addEventListener() {}, removeEventListener() {}, body: { appendChild() { shown++; } }
  };
  const context = { navigator: { userAgent: mobile ? 'iPhone' : 'Desktop', maxTouchPoints: 0 }, window: { matchMedia: () => ({ matches: false }) }, document,
    localStorage: { getItem(key) { if (!storage) throw Error(); return data.get(key); }, setItem(key,value) { if (!storage) throw Error(); data.set(key,value); } } };
  return { run() { runInNewContext(source,context); }, events, get shown() { return shown; }, get removed() { return removed; } };
}
test('mobile prompt is remembered before interaction and never repeats on reload', () => { const b=browser();b.run();b.run();assert.equal(b.shown,1); });
test('dismiss and save both remove prompt without trapping the visitor', () => { for(const action of ['a','button']) { const b=browser();b.run();b.events[action]();b.run();assert.equal(b.removed,1);assert.equal(b.shown,1); } });
test('desktop is not prompted', () => { const b=browser({mobile:false});b.run();assert.equal(b.shown,0); });
test('cookie fallback prevents repeated prompts when localStorage is blocked', () => { const b=browser({storage:false});b.run();b.run();assert.equal(b.shown,1); });
test('both persistence mechanisms blocked: do not create a loop', () => { const b=browser({storage:false,cookies:false});b.run();b.run();assert.equal(b.shown,0); });
