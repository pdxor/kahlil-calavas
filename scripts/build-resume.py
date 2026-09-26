"""Generate both hosted resume PDFs and plain text from the shared, verified data.
Requires reportlab and Pillow. Run from the repository root.
"""
import json
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white, black
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public/resumes'
OUT.mkdir(parents=True, exist_ok=True)
D = json.loads((ROOT / 'lib/resume.json').read_text())
for name, file in [('Manrope','Manrope-400.ttf'),('ManropeBold','Manrope-700.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(ROOT / 'public/timeline' / file)))
W,H = 612,792

def text(c,s,x,y,size=10,color=white,font='Manrope'):
    c.setFillColor(color); c.setFont(font,size); c.drawString(x,H-y,s)

def para(c,s,x,y,width,size=10,color=white,leading=None):
    p=Paragraph(escape(s),ParagraphStyle('body',fontName='Manrope',fontSize=size,leading=leading or size*1.48,textColor=color))
    _,h=p.wrap(width,1000); p.drawOn(c,x,H-y-h); return y+h

def photo(c,path,x,y,w,h):
    im=Image.open(ROOT / 'public' / path.lstrip('/')).convert('RGB')
    iw,ih=im.size; ratio=max(w/iw,h/ih); nw,nh=w/ratio,h/ratio
    im=im.crop(((iw-nw)/2,(ih-nh)/2,(iw+nw)/2,(ih+nh)/2))
    c.drawImage(ImageReader(im),x,H-y-h,w,h)

def rect(c,x,y,w,h,color):
    c.setFillColor(color); c.rect(x,H-y-h,w,h,fill=1,stroke=0)

def footer(c,n):
    c.setStrokeColor(HexColor('#404040'));c.line(34,37,578,37)
    text(c,'KAHLIL CALAVAS / KAHLILCALAVAS.DEV',34,772,7,HexColor('#bbbbbb'))
    text(c,f'0{n} / 02',540,772,7,HexColor('#bbbbbb'))
    c.linkURL(D['website'],(34,10,390,32),relative=0)

def label(c,s,x,y): text(c,s.upper(),x,y,8,HexColor('#bbbbbb'))

c=canvas.Canvas(str(OUT/'Kahlil-Calavas-Visual-Resume.pdf'),pagesize=(W,H),pageCompression=1)
c.setTitle('Kahlil Calavas | Creative Technology & Spatial Computing')
c.setAuthor(D['name']);c.setSubject('Visual resume: experience, selected work, and capabilities')
rect(c,0,0,W,H,black)
photo(c,'/images/future-lens-scan-capture.png',0,0,W,340)
c.saveState();c.setFillColor(black);c.setFillAlpha(.50);c.rect(0,H-340,W,340,fill=1,stroke=0);c.restoreState()
label(c,'Creative technology / Spatial computing',34,37)
text(c,'KAHLIL',30,112,64,font='ManropeBold')
text(c,'CALAVAS.',30,181,64,font='ManropeBold')
text(c,'Somewhere between code,',34,235,20)
text(c,'the land, and imagination.',34,263,20)
text(c,'CTO at TerraLux / Creator of The Spatial Network',34,310,10)
y=365
text(c,D['email']+'  /  '+D['phone'],34,y,9)
text(c,D['website'].removeprefix('https://').rstrip('/'),34,y+18,9)
email_width = pdfmetrics.stringWidth(D['email'], 'Manrope', 9)
phone_x = 34 + pdfmetrics.stringWidth(D['email']+'  /  ', 'Manrope', 9)
c.linkURL('mailto:'+D['email'],(34,H-y-3,34+email_width,H-y+12),relative=0)
c.linkURL('tel:+18608344959',(phone_x,H-y-3,phone_x+pdfmetrics.stringWidth(D['phone'],'Manrope',9),H-y+12),relative=0)
c.linkURL(D['website'],(34,H-y-22,250,H-y-8),relative=0)
label(c,'01 / Between worlds',34,420)
para(c,D['summary'],34,436,544,10.5,HexColor('#dedede'))
label(c,'02 / Current work',34,525)
text(c,'TerraLux / The Futurist Network',34,548,17,font='ManropeBold')
c.linkURL('https://thefuturist.network',(34,H-554,365,H-530),relative=0)
text(c,'Chief Technology Officer  /  Aug 2022 - Present',34,568,9,HexColor('#bbbbbb'))
para(c,'Build React, TypeScript, and Supabase platforms; develop Unity-based iOS AR; create digital twins and architectural visualizations. Connect technical delivery with public demonstrations, fundraising presentations, and day-to-day technology operations.',34,580,544,10)
label(c,'03 / Selected projects',34,661)
for x,title,body,url in [
    (34,'FUTURE LENS.','Scan. Remix. Publish.\nDigital twins, tours, and AR.','https://futurelens.cloud'),
    (222,'FUTURE LAB.','Gather. Innovate. Build.\nPeople, place, and technology.','https://thefuturist.network/futurelab'),
    (410,'TREE XR / BOXBOI.','Wearable AR, storytelling,\nand imagined worlds.','https://github.com/pdxor/TreeXR')]:
    text(c,title,x,686,11,font='ManropeBold');para(c,body.replace('\n',' '),x,696,166,9,HexColor('#bbbbbb'))
    if x == 410:
        c.linkURL(url,(x,106,x+50,122),relative=0)
        c.linkURL('https://github.com/pdxor/green-timeline',(x+61,106,x+168,122),relative=0)
    else:
        c.linkURL(url,(x,52,x+168,125),relative=0)
footer(c,1);c.showPage()
rect(c,0,0,W,H,black)
photo(c,'/tours/bridge-between-the-worlds.jpg',0,0,W,160)
c.saveState();c.setFillColor(black);c.setFillAlpha(.55);c.rect(0,H-160,W,160,fill=1,stroke=0);c.restoreState()
label(c,'Experience / Tools / Education',34,35)
text(c,'BUILT OVER TIME.',30,91,37,font='ManropeBold')
text(c,'From the web to the world.',34,125,14)
label(c,'04 / Experience',34,194)
y=213
visual_summaries = [
    'Maintained WordPress, Shopify, and learning platforms. Developed headless WordPress with Next.js 13, Vercel, and WP Engine; integrated APIs and plugins.',
    'Built WordPress themes, plugins, and API integrations. Managed backups, updates, quality assurance, and Git workflows with cross-functional teams.',
    'Developed WordPress themes and plugins; maintained sites across frameworks and deployed Firebase apps. Built an internal development wiki and coordinated through GitHub.',
    'Translated Sketch designs into WordPress themes with Genesis and ACF. Maintained client sites, supported proposals, and improved accessibility for Connecticut libraries.',
    'Migrated static sites to WordPress. Built custom themes, plugins, and search-optimized sales pages, plus a machine directory with video and interactive presentations.'
]
for job,summary in zip(D['experience'][1:],visual_summaries):
    text(c,job['company'],34,y,13,font='ManropeBold');y+=17
    y=para(c,job['role'],34,y-3,330,9,HexColor('#dddddd'))+4
    text(c,job['dates'],34,y+7,8,HexColor('#aaaaaa'));y+=19
    y=para(c,summary,34,y,323,9.1,HexColor('#cccccc'),12.6)+23
label(c,'05 / Capabilities',392,194)
y2=218
for group in D['skills']:
    text(c,group['name'],392,y2,10,font='ManropeBold')
    y2=para(c,' / '.join(group['items']),392,y2+9,186,8.6,HexColor('#cccccc'),13)+24
label(c,'06 / Education',392,y2+2);y2+=25
for ed in D['education']:
    y2=para(c,ed['institution'],392,y2,186,9.2,white,13)+4
    y2=para(c,ed['study']+' | '+ed['dates'],392,y2,186,8.3,HexColor('#bbbbbb'),12)+17
assert y - 23 < 740, f'Experience overflow {y - 23}'
assert y2 < 750, f'Sidebar overflow {y2}'
footer(c,2);c.save()

# ATS version: selectable text, standard headings, and one-column reading order.
styles={k:ParagraphStyle(k,fontName='Helvetica-Bold' if k in ('title','heading','job') else 'Helvetica',fontSize=s,leading=l,spaceAfter=a) for k,s,l,a in [('title',24,28,8),('heading',12,16,9),('job',11,14,4),('body',10,14,7),('small',9,13,5)]}
story=[]
def p(s,style='body'):story.append(Paragraph(escape(s),styles[style]))
p(D['name'],'title');p(D['headline']);p(D['email']+' | '+D['phone']+' | '+D['website'],'small')
p('Professional Summary','heading');p(D['summary'])
p('Professional Experience','heading')
for i,job in enumerate(D['experience']):
    if i==3: story.append(PageBreak());p(D['name']+' | Resume, continued','heading')
    p(job['company']+' | '+job['role'],'job');p(job['dates']+(' | '+job['location'] if job.get('location') else ''),'small')
    for b in job['bullets']:p('- '+b)
    story.append(Spacer(1,6))
    if i==2:
        p('Selected Projects','heading')
        for project in D['projects']:p(project['name']+': '+project['description'])
p('Technical Skills','heading')
for group in D['skills']:p(group['name']+': '+', '.join(group['items']))
p('Education & Professional Development','heading')
for ed in D['education']:p(ed['institution']+' | '+ed['study']+' | '+ed['dates'])
SimpleDocTemplate(str(OUT/'Kahlil-Calavas-ATS-Resume.pdf'),pagesize=(W,H),rightMargin=42,leftMargin=42,topMargin=38,bottomMargin=38,title='Kahlil Calavas - Resume',author=D['name']).build(story)
lines=[D['name'],D['headline'],D['email']+' | '+D['phone'],D['website'],'','PROFESSIONAL SUMMARY',D['summary'],'','PROFESSIONAL EXPERIENCE']
for j in D['experience']:lines.extend([j['company']+' | '+j['role'],j['dates'],*['- '+b for b in j['bullets']],''])
lines+=['SELECTED PROJECTS']
for pr in D['projects']:lines.extend([pr['name']+' | '+pr['url'],pr['description'],''])
lines+=['TECHNICAL SKILLS']+[g['name']+': '+', '.join(g['items']) for g in D['skills']]+['','EDUCATION & PROFESSIONAL DEVELOPMENT']
lines += [e['institution']+' | '+e['study']+' | '+e['dates'] for e in D['education']]
(OUT/'Kahlil-Calavas-Resume.txt').write_text('\n'.join(lines)+'\n')
(OUT/'resume.json').write_text(json.dumps(D,indent=2)+'\n')
print('Created visual PDF, ATS PDF, plain text, and JSON.')
