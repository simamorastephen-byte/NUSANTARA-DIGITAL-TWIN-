# 📖 Kamus Data (Data Dictionary) - Nusantara Digital Twin

Dokumen ini memuat spesifikasi skema, tipe data, unit pengukuran, dan rentang nilai dari dataset master 38 provinsi serta layer telemetri geospasial di platform **Nusantara Digital Twin**.

---

## 1. Skema Data Nasional (`INDONESIA_NATIONAL_DATA`)

Objek agregat data nasional yang digunakan sebagai dasar kalibrasi makroekonomi dan benchmark provinsi:

| Field | Tipe Data | Unit | Deskripsi |
|---|---|---|---|
| `totalProvinces` | `Number` | Entitas | Total provinsi administratif di Republik Indonesia (38). |
| `totalPopulation` | `Number` | Jiwa | Estimasi total populasi penduduk nasional (~281.600.000 jiwa). |
| `nationalGDP` | `Number` | Triliun IDR | Produk Domestik Bruto (PDB) Nasional Nominal (~Rp 22.150 Triliun). |
| `averageHDI` | `Number` | Index (0-100) | Rata-rata Indeks Pembangunan Manusia (IPM) Nasional (~74.39). |
| `forestCoverTotalHa` | `Number` | Hektar (Ha) | Luas total tutupan kanopi hutan nasional (~95.300.000 Ha). |
| `renewableEnergyShare` | `Number` | Persentase (%) | Pangsa bauran energi baru terbarukan dalam grid nasional (~14.8%). |
| `internetPenetration` | `Number` | Persentase (%) | Penetrasi akses internet rumah tangga & seluler (~79.5%). |
| `totalIslands` | `Number` | Pulau | Total jumlah pulau terdaftar di Nusantara (17.508 pulau). |
| `nationalGrowthRate` | `Number` | Persentase (%) | Rata-rata laju pertumbuhan ekonomi riil tahunan (~5.05%). |

---

## 2. Skema Profil Provinsi (`PROVINCES_DATA[]`)

Setiap entitas provinsi di dalam array `PROVINCES_DATA` memiliki struktur nested object yang distandardisasi:

### 2.1. Identitas & Geografi Dasar
- `id` (`String`, e.g. `"ID-AC"`, `"ID-KI"`): Kode ISO-3166-2:ID atau penanda unik provinsi.
- `name` (`String`): Nama resmi provinsi (e.g. `"Kalimantan Timur (IKN Nusantara)"`).
- `capital` (`String`): Ibukota pusat administrasi provinsi (e.g. `"Nusantara / Samarinda"`).
- `island` (`String`): Kluster pulau utama (`"Sumatera"`, `"Jawa"`, `"Kalimantan"`, `"Sulawesi"`, `"Bali-Nusa Tenggara"`, `"Maluku"`, `"Papua"`).
- `lat` (`Number`), `lng` (`Number`): Titik koordinat centroid geospasial untuk kamera GIS Leaflet.
- `establishedYear` (`Number`): Tahun pembentukan hukum provinsi.

### 2.2. Objek `populasi` (Demografi & Ketenagakerjaan)
- `total` (`Number`, Jiwa): Jumlah penduduk total provinsi.
- `density` (`Number`, Jiwa/km²): Kepadatan penduduk per kilometer persegi.
- `growthRate` (`Number`, %/thn): Laju pertumbuhan populasi tahunan.
- `ageStructure` (`Object`): Komposisi usia:
  - `young` (%): Usia 0-14 tahun.
  - `productive` (%): Usia produktif 15-64 tahun (Bonus Demografi).
  - `elderly` (%): Usia lansia 65+ tahun.
- `urbanizationRate` (`Number`, %): Persentase penduduk yang berdomisili di kawasan perkotaan.
- `workforce` (`Number`, Jiwa): Jumlah angkatan kerja aktif.

### 2.3. Objek `ekonomi` (Makroekonomi & Fiskal)
- `gdp` (`Number`, Triliun IDR): Produk Domestik Regional Bruto (PDRB) Nominal daerah.
- `gdpPerCapita` (`Number`, Juta IDR/jiwa): Rata-rata PDRB per kapita tahunan.
- `gdpGrowthRate` (`Number`, %): Laju pertumbuhan ekonomi riil daerah.
- `mainSectors` (`Array<String>`): Sektor unggulan penopang perekonomian daerah.
- `inflation` (`Number`, %): Tingkat inflasi IHK tahunan.
- `foreignInvestment` (`Number`, Juta USD): Realisasi Penanaman Modal Asing (PMA).
- `exportValue` (`Number`, Juta USD): Nilai ekspor komoditas dan manufaktur tahunan.

### 2.4. Objek `pendidikan` (SDM & Kesiapan Digital)
- `ipm` (`Number`, Skala 0-100): Indeks Pembangunan Manusia provinsi.
- `literacyRate` (`Number`, %): Angka melek huruf penduduk dewasa.
- `higherEducationRatio` (`Number`, %): Proporsi penduduk berpendidikan diploma/sarjana.
- `digitalTalentIndex` (`Number`, Skala 0-100): Indeks kapasitas talenta teknologi informasi & literasi AI daerah.
- `totalSchools` (`Number`): Total unit sekolah dasar dan menengah.
- `totalUniversities` (`Number`): Total institusi perguruan tinggi / akademi terakreditasi.

### 2.5. Objek `infrastruktur` (Konektivitas, Energi, & Utilitas)
- `roadNetworkKm` (`Number`, Km): Total panjang jaringan jalan provinsi & kabupaten/kota.
- `tollRoadKm` (`Number`, Km): Total panjang jalan tol operasional.
- `portsCount` (`Number`): Jumlah pelabuhan laut logistik & perikanan.
- `airportsCount` (`Number`): Jumlah bandar udara komersial dan perintis.
- `internetPenetration` (`Number`, %): Penetrasi jaringan internet daerah.
- `electricityCapacityMW` (`Number`, Megawatt): Total kapasitas daya pembangkit terpasang.
- `renewableEnergyShare` (`Number`, %): Proporsi pembangkit energi baru terbarukan (EBT).
- `palapaRingConnected` (`Boolean`): Status integrasi jaringan backbone serat optik Palapa Ring.
- `smartCityScore` (`Number`, Skala 0-100): Skor evaluasi kematangan Smart City & SPBE daerah.

### 2.6. Objek `lingkungan` (Ekologi, Emisi, & Potensi Hijau)
- `forestCoverHa` (`Number`, Hektar): Luas tutupan hutan alam dan konservasi.
- `forestPercentage` (`Number`, %): Proporsi luas hutan dibanding total luas daratan provinsi.
- `carbonEmission` (`Number`, Juta Ton CO₂eq): Estimasi emisi gas rumah kaca tahunan.
- `carbonAbsorption` (`Number`, Juta Ton CO₂eq): Estimasi kapasitas serapan karbon hutan dan mangrove.
- `aqiCurrent` (`Number`, Index AQI): Nilai rata-rata indeks kualitas udara realtime.
- `disasterRiskScore` (`Number`, Skala 0-100): Indeks risiko kerentanan bencana geologis & hidrometeorologi.
- `renewablePotential` (`Object`, MW): Potensi cadangan energi hijau:
  - `solar` (MW), `hydro` (MW), `geothermal` (MW), `wind` (MW).

### 2.7. Objek `telemetry` (Live IoT Simulation Feed)
- `airQuality` (`String`): Kategori deskriptif AQI.
- `gridLoad` (`String`): Status beban kestabilan transmisi listrik.
- `sparkline` (`Array<Number>`): 10 titik data serial fluktuasi beban sistem daya (%).
- `seismicStatus` (`String`): Telemetri sensor seismograf BMKG.
- `waterLevelStatus` (`String`): Sensor muka air DAS / peringatan dini banjir.
- `logisticsStatus` (`String`): Kelancaran arus rantai pasok dan pelabuhan.

---

## 3. Layer Geospasial Tambahan (`js/data.js`)

1. **`PALAPA_RING_NODES` & `PALAPA_RING_ROUTES`**: Titik landing station serat optik barat, tengah, timur, dan jalur kabel laut.
2. **`SEA_TOLL_ROUTES` & `SEA_TOLL_PORTS`**: Jalur pelayaran logistik maritim nasional (Tol Laut Nusantara).
3. **`RENEWABLE_ENERGY_HUBS`**: Lokasi PLTS Terapung Cirata, Geothermal Kamojang/Sarulla, PLTB Sidrap/Tolo, PLTA Batang Toru/Sigura-Gura.
4. **`IKN_ZONE_METRICS`**: Titik gravitasi Kawasan Inti Pusat Pemerintahan (KIPP) Nusantara Smart Forest City.
