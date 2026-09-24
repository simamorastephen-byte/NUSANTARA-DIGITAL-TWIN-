# 📘 Panduan Pengguna & Pengoperasian (User Manual)

Selamat datang di Panduan Pengoperasian **Nusantara Digital Twin (Indonesia 2045)**. Dokumen ini ditujukan bagi analis data, peneliti, akademisi, dan operator command center.

---

## 1. Antarmuka Utama Command Center

Platform terbagi menjadi 3 panel operasi utama:

```
+-------------------+--------------------------------+--------------------+
| 1. DIRECTORY      | 2. GEOSPATIAL MAP VIEWPORT     | 3. DOSSIER PANEL   |
| - Search Box      | - Leaflet GIS 38 Batas Wilayah | - 7 Tab Analisis   |
| - Filter Pulau    | - 5 Mode Choropleth (IPM, dll) | - Radar Chart      |
| - Daftar 38 Prov  | - Telemetri Layer (Palapa, EBT)| - Live IoT Spark   |
| - Quick Stats     | - Auto-Tour Kiosk Controller   | - Cetak PDF Resmi  |
+-------------------+--------------------------------+--------------------+
```

---

## 2. Navigasi & Eksplorasi Peta

### Memilih & Menginspeksi Provinsi
- **Klik Langsung**: Klik batas wilayah provinsi mana pun pada peta Leaflet.
- **Pencarian Cepat**: Tekan tombol keyboard `/` atau `Ctrl+K`, ketik nama provinsi atau ibukota, lalu tekan `Enter`.
- **Filter Wilayah**: Gunakan tab filter pulau (*Sumatera, Jawa, Kalimantan, Sulawesi, Bali-Nusa Tenggara, Maluku, Papua*).

### Mengubah Mode Heatmap / Choropleth
Gunakan selektor di sudut kiri atas peta untuk beralih antara 5 indikator:
1. 🎓 **Indeks Pembangunan Manusia (IPM)**
2. 📈 **PDRB Daerah (Ekonomi)**
3. 👥 **Kepadatan Penduduk (Jiwa/km²)**
4. 🌿 **Tutupan Hutan (%)**
5. ⚡ **Kesiapan Digital & Smart City**

### Mengaktifkan Layer Geospasial
Centang opsi di HUD layer kanan atas peta:
- 🌐 **Palapa Ring**: Menampilkan jalur kabel bawah laut & gateway hub nasional.
- 🚢 **Tol Laut**: Menampilkan rute logistik maritim antar pelabuhan utama.
- ⚡ **Pembangkit EBT**: Titik pembangkit PLTS, Geothermal, PLTB, dan PLTA.
- 🏛️ **IKN Nusantara**: Beacon pusat gravitasi smart capital city.

---

## 3. Tab Dossier Analisis Provinsi

Panel kanan menyediakan 7 tab inspeksi mendalam:
1. **Ringkasan**: 4 Kartu KPI Utama, Radar Chart 5 Pilar, Proyek Strategis Daerah.
2. **Demografi**: Piramida usia (*young, productive, elderly*), tingkat urbanisasi, angkatan kerja.
3. **Ekonomi**: PDRB Nominal, PDRB per kapita, inflasi, PMA, ekspor, dan diagram kontribusi sektor.
4. **Pendidikan**: Skor talenta digital, literasi AI, jumlah unit sekolah dan universitas.
5. **Infrastruktur**: Panjang jaringan jalan, penetrasi 5G, kapasitas pembangkit (MW), SPBE score.
6. **Lingkungan**: Kualitas udara AQI, emisi vs absorpsi karbon, potensi energi matahari/hidro/geothermal/angin.
7. **IoT Live Telemetry**: Grafik fluktuasi beban transmisi listrik (*sparkline*), sensor seismik BMKG, dan sensor muka air DAS.

---

## 4. Mesin Simulasi "What-If" 2045 Sandbox

1. Klik tombol **🧪 What-If Sandbox** di header atas.
2. Pilih cakupan simulasi: **Nasional (Agregat Indonesia)** atau **Provinsi Terpilih**.
3. Gunakan salah satu **Preset Kebijakan**:
   - *Business as Usual*
   - *⭐ Indonesia Emas 2045 (Optimal)*
   - *🌿 Nusantara Super Green (Net-Zero)*
   - *⚡ High-Tech AI & Digital Powerhouse*
4. Atau atur slider kebijakan secara kustom:
   - Geser slider *Akselerasi EBT, Talenta Digital, Infrastruktur, Reforestasi, atau IKN*.
5. Amati perubahan dinamis pada:
   - Pertumbuhan PDB (%), PDB per kapita (USD), IPM Proyeksi, Tahun Net-Zero, dan Penurunan Kemiskinan.
   - Narasi **Nusantara AI Executive Diagnostic**.

---

## 5. Komparasi Side-by-Side Antar Provinsi

1. Klik tombol **⚖️ Komparasi** di header atas.
2. Pilih **Provinsi A** dan **Provinsi B** (atau klik preset populer seperti *DKI vs IKN*, *Jabar vs Jatim*).
3. Evaluasi perbedaan melalui:
   - **Radar Chart Komparatif 5 Pilar**.
   - **Tabel Selisih (+/- %)** dengan badge pemenang tiap indikator.
4. Salin ringkasan komparasi ke papan klip atau cetak laporan.

---

## 6. Mode Kiosk & Auto-Tour Presentasi

- Klik tombol **🚀 Auto Tour** di header atau tekan tombol `Space`.
- Kamera peta akan otomatis melakukan navigasi sinematik menjelajahi provinsi di seluruh Indonesia secara bergiliran.
- Tekan `Space` untuk pause/resume, atau `Esc` untuk menghentikan tur.

---

## 7. Ekspor Dataset & Laporan

- **Ekspor Dataset**: Klik tombol **📥 Ekspor Data** di header untuk mengunduh seluruh 38 basis data provinsi dalam format **CSV Spreadsheet** (kompatibel Microsoft Excel) atau **JSON Raw Data**.
- **Cetak Dokumen Resmi**: Klik tombol **🖨️ Cetak Dossier (PDF)** di bagian bawah panel dossier untuk mencetak lembar eksekutif berformat resmi A4.

---

## 8. Tabel Pintasan Keyboard (Shortcuts)

| Tombol | Aksi |
|---|---|
| `/` atau `Ctrl + K` | Buka dan fokus ke kolom pencarian provinsi |
| `Esc` | Tutup semua dialog modal atau batalkan Auto Tour |
| `Space` | Pause / Lanjutkan Auto Tour sinematik |
| `M` | Mute / Unmute sintesis efek suara cyber |
| `?` | Buka jendela panduan bantuan cepat |
