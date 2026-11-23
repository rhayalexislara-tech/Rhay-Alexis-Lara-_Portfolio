# Rhay Alexis D. Lara – Portfolio

Personal portfolio website of **Rhay Alexis D. Lara**, a Computer Science student at Gordon College (Olongapo City, Zambales) and aspiring software developer.

## About me

I'm a detail-oriented Computer Science undergraduate and Dean's Lister who enjoys programming, web development and solving problems with practical solutions. I'm looking to grow my skills and gain real experience in software development.

## Technical skills

- **Languages:** HTML, CSS, JavaScript, Python
- **Tools:** Git, Visual Studio Code
- **Other:** data encoding and management, technical problem-solving, teamwork, communication

## What the portfolio contains

- Introduction, about me, skills and tools
- Featured project: **Tulay App**, a community help platform (case study with overview, problem, users, process, role, screenshots and lessons learned)
- Education, work experience and certifications (TESDA NC II and Cisco Networking Academy: Python, HTML and CSS Essentials)
- Contact details and a downloadable résumé

## Technologies used

- HTML5 and CSS3 (custom properties, Grid, Flexbox, responsive media queries)
- Vanilla JavaScript (hamburger menu, scroll animations, lightbox, draggable ID card)
- [three.js](https://threejs.org/) (r128, loaded from cdnjs) for the animated background
- Google Fonts (Sora)
- Accessibility: skip link, keyboard focus styles, alt text, `prefers-reduced-motion` support

## Project structure

```
.
├── index.html            # Page markup
├── README.md
├── css/
│   └── styles.css        # All styles
├── js/
│   ├── background.js     # three.js animated background
│   ├── main.js           # Preloader, cursor, scroll reveal, card hover effects
│   ├── nav.js            # Hamburger menu for small screens
│   ├── id-card.js        # Draggable ID card
│   └── lightbox.js       # Screenshot viewer
└── assets/
    ├── favicon.svg       # Favicon (plus favicon-32.png and apple-touch-icon.png)
    ├── images/           # Portrait, Tulay screenshots, certificates
    └── docs/
        └── resume.pdf    # Résumé
```

## Run it locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

Hosted with GitHub Pages: repository **Settings → Pages → Deploy from a branch → `main` / root**.

## Contact

rhayalexislara@gmail.com · [GitHub](https://github.com/rhayalexislara-tech)
