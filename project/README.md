# PWA Project Foundation

## Struktur Direktori

- `index.html` : Halaman utama.
- `css/` : Berisi style modular (`style.css` untuk layout dasar, `animation.css` khusus efek visual).
- `js/` : Berisi logic modular (`app.js` untuk core system, `animation.js` untuk interaktivitas).
- `assets/` : Menyimpan file lokal agar offline-friendly.
  - `images/`, `videos/`, `music/`, `stickers/`, `background/`, `icons/`, `fonts/`
- `manifest.json` : Konfigurasi PWA (ikon, tema warna, display ponsel).
- `sw.js` : Service worker untuk caching agar aplikasi bisa berjalan offline.

## Catatan Eksekusi
- Project dibuat murni Vanilla (HTML, CSS, JS) tanpa framework.
- Mendukung localhost server via Termux.
