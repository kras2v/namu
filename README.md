# NAMU

Static website project for a museum-themed interface (`NA MU`) with a gallery-focused home page, exhibition page, and about page.

## Project structure

- `index.html` — main page with gallery/events sections and ticket booking modal.
- `exhibition.html` — exhibitions page.
- `about.html` — about page.
- `style.css` — shared site styles.
- `script.js` — interactive behavior (menu, modal, slider, form validation).
- `assets/images/` — project images and icons.

## Technologies

- HTML5
- CSS3
- JavaScript (vanilla)
- Swiper (`swiper-bundle.min.js` / `swiper-bundle.min.css`)

## Run locally

No build step is required.

1. Clone the repository.
2. Open `index.html` directly in a browser, or start a simple static server from the repository root.

Example with Python:

```bash
python -m http.server 8000
```

Then open: `http://localhost:8000/index.html`

## Notes

- The repository currently does not include configured lint, build, or automated test scripts.
