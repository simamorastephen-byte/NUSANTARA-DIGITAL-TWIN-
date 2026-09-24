# 🤝 Panduan Kontribusi (Contributing Guidelines)

Terima kasih atas minat Anda untuk berkontribusi pada proyek **Nusantara Digital Twin (Indonesia 2045)** di Institut Teknologi Del (IT Del).

---

## 1. Standar Kode & Kualitas (Code Quality Standards)

- **HTML5**: Gunakan elemen semantik (`<header>`, `<main>`, `<aside>`, `<nav>`, `<section>`, `<footer>`). Pastikan semua elemen interaktif memiliki `aria-label` atau `title`.
- **CSS3**: Gunakan CSS Variables (`:root`) yang didefinisikan dalam `css/style.css`. Hindari penulisan style *inline* pada HTML.
- **JavaScript**:
  - Gunakan Vanilla ES6+ (`const`, `let`, arrow functions, template literals).
  - Hindari penggunaan dependensi NPM berlebih.
  - Setiap fungsi baru harus memiliki JSDoc komentar singkat.
  - Hancurkan (*destroy*) instans Chart.js sebelum membuat grafik baru untuk mencegah kebocoran memori.

---

## 2. Alur Git & Commit Message

Gunakan format *Conventional Commits*:
- `feat:` Penambahan fitur baru (misal: layer satelit baru, mode choropleth baru).
- `fix:` Perbaikan bug (misal: perbaikan poligon GeoJSON, error kalkulasi PDRB).
- `docs:` Pembaruan atau penambahan dokumentasi.
- `style:` Pembaruan estetika UI/CSS tanpa mengubah logika kode.
- `refactor:` Restrukturisasi kode untuk efisiensi performa tanpa mengubah fitur.

Contoh:
```bash
git commit -m "feat(simulation): tambahkan proyeksi bauran nuklir dan geothermal 2045"
```

---

## 3. Checklist Pengujian Sebelum Pull Request (PR)

- [ ] Seluruh 38 provinsi dapat dipilih dan dirender tanpa error di konsol browser (`F12`).
- [ ] 5 mode choropleth menampilkan gradasi warna yang akurat dan legenda yang sinkron.
- [ ] Mesin simulasi What-If menghasilkan kalkulasi yang konsisten di semua preset.
- [ ] Komparasi side-by-side menampilkan delta selisih persentase yang valid.
- [ ] Fitur ekspor CSV dan JSON dapat diunduh dan dibuka dengan benar di Microsoft Excel / teks editor.
- [ ] Tampilan responsif pada ukuran desktop (>1200px), laptop (1024px), tablet (768px), dan mobile (<600px).
- [ ] Efek audio Web Audio API berjalan tanpa distorsi dan tombol *Mute* berfungsi.
