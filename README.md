# urvigupta.github.io

Personal portfolio — React, Vite, and Tailwind CSS. Hosted on GitHub Pages at [urvi-gupta06.github.io](https://urvi-gupta06.github.io).

## Local development

```bash
cd urvigupta.github.io
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/   # Navbar, MobileSidebar, Card, ThemeToggle
├── sections/     # Home, Experience, Projects, Skills, Education, Writing, Contact
├── hooks/        # useTheme (dark mode)
└── utils/        # scrollToSection (smooth scroll + hash URLs)
```

## Sections

Single long-scroll page. Navbar links smooth-scroll to each section. URLs use hashes (e.g. `/#projects`).
