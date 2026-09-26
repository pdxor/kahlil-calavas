# Resume content and exports

Updated September 26, 2026. The shared content lives in `lib/resume.json`.

The user supplied `kahlils-resume.docx` on September 26, 2026. It is the source for contact information, employers, roles, dates, responsibilities, technical skills, and education. Current projects and positioning are also drawn from this portfolio's biography, Future Lens and Future Lab sections, tours, and timeline. Tree XR collaborators and event context are taken from the homepage's existing project description.

Claim review: employment dates preserve the source, including overlapping roles. No employment dates or title were invented for the German Kitchen Center, so it is omitted from the employment history. Education lists Graphic Technology without claiming a degree. Treehouse is continuing learning, not a completed certification. CI/CD retains the source's familiarity qualifier. No new performance metrics, awards, or unsupported leadership scope have been added. Visual PDF prose condenses the same responsibilities; the ATS PDF and HTML provide fuller detail.

Visual sources: the user-supplied IX Art Park capture photograph and the existing Bridge Between the Worlds tour photograph. Both are already in the portfolio asset library. PDF text is live and selectable; images are embedded and run to the page edges. The visual resume is US Letter, two pages, designed primarily for screen sharing. The separate ATS PDF uses a single column and conventional headings.

Regenerate all downloads from the repository root with `python3 scripts/build-resume.py` using Python with ReportLab and Pillow installed. Outputs are in `public/resumes/`. The website reads the same JSON at build time. After regeneration, render and visually inspect both PDFs, then run the site checks and build before deploying.
