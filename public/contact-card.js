/* A non-blocking, once-per-browser contact invitation. No automatic download. */
(() => {
  const key = 'kahlil-contact-offered';
  const mobile = /iPhone|iPod|Android.*Mobile/i.test(navigator.userAgent)
    || (navigator.maxTouchPoints > 0
      && window.matchMedia('(pointer: coarse) and (max-width: 767px)').matches);
  if (!mobile) return;

  // Persist BEFORE displaying. If persistence is unavailable, don't risk a loop.
  let remembered = false;
  try { if (localStorage.getItem(key)) return; } catch { /* Try cookie below. */ }
  if (document.cookie.split(';').some(part => part.trim().startsWith(`${key}=`))) return;
  try {
    localStorage.setItem(key, '1');
    remembered = localStorage.getItem(key) === '1';
  } catch { /* A first-party cookie supports browsers with blocked localStorage. */ }
  try {
    document.cookie = `${key}=1; Max-Age=34560000; Path=/; SameSite=Lax; Secure`;
    remembered ||= document.cookie.split(';').some(part => part.trim() === `${key}=1`);
  } catch { /* Leave the website usable if both persistence methods fail. */ }
  if (!remembered || document.getElementById('contact-invitation')) return;

  const invitation = document.createElement('aside');
  invitation.id = 'contact-invitation';
  invitation.setAttribute('aria-labelledby', 'contact-invitation-title');
  invitation.innerHTML = `
    <p class="contact-invitation-label">Keep in touch</p>
    <h2 id="contact-invitation-title">Save my contact?</h2>
    <p>Kahlil Calavas · Creative Technologist</p>
    <p>Add my email, phone, and website to your contacts.</p>
    <a class="contact-invitation-save" href="/kahlil-calavas.vcf">Save contact</a>
    <button type="button">Continue to website</button>`;
  const dismiss = () => {
    invitation.remove();
    document.removeEventListener('keydown', onKey);
  };
  const onKey = event => { if (event.key === 'Escape') dismiss(); };
  invitation.querySelector('a').addEventListener('click', dismiss);
  invitation.querySelector('button').addEventListener('click', dismiss);
  document.addEventListener('keydown', onKey);
  document.body.appendChild(invitation);
})();
