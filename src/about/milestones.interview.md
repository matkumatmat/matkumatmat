# Milestone interview — DRAFT

> Status: Draft. Menunggu jawaban user untuk pertanyaan terbuka di bawah.
> Bahasa konten final: Full English. Gambar milestone: user yang sediakan.

## Settled

- Sumber: 17 item warehouse dari user (chat), dipetakan ke timeline experience
  yang sudah ada di `src/about/data.ts` (tidak ditanya ulang).
- Item ops/audit vs item tools dipisah daftarnya (lihat bawah); penetapan
  `core` per item menunggu keputusan Q1.
- Q1 SETTLED: split disetujui user. Item 1, 2, 12, 14, 16 = `warehouse`;
  item 3-11, 13, 15, 17 = `programming`.
- Q2 SETTLED: user tidak ingat tahun pasti dan meminta tahun diisi wajar
  (user-approved approximation, BUKAN fakta terverifikasi). Urutan kronologis
  mengikuti urutan list user; item 12 = Sep 2025 (anchor); sisanya sebelum
  Sep 2025 dan berdekatan. Penetapan final di tabel bawah.

## Item ops & audit (kandidat core warehouse)

| # | Item | Tahun inferensi |
|---|------|-----------------|
| 1 | Vaccine Packing Operator, usulan adjust alur persiapan (prep 30 mnt lebih awal) diterima atasan | 2022 |
| 2 | Tim inti kebersihan persiapan audit WHO, paham standar kebersihan & kesiapan WHO | Dec 2022 |
| 12 | Audit gudang distributor PPI Padang, 3 temuan major, distributor gagal lanjut | Sep 2025 |
| 14 | Audit distributor MUP Jakarta | Jul 2025 (approx) |
| 16 | Audit distributor Elo Karsa & Itama Ranoraya | Aug 2025 (approx) |

## Item tools & development (kandidat core programming)

| # | Item | Stack | Tahun inferensi |
|---|------|-------|-----------------|
| 3 | Sistem pencatatan stok embalase, sync per pekerja | Excel, VBA, Spreadsheet | 2023 |
| 4 | Analisa kebutuhan embalase + report | Python (data analysis) | Nov 2023 (approx) |
| 5 | Excel sheet management stock produk (cold chain stock operator) | Excel | 2024 |
| 6 | Software printing label pengiriman | Python, Zebra printer | Jan 2025 (approx) |
| 7 | WMS v1: alur proses + dashboard | Python, TypeScript | Feb 2025 (approx) |
| 8 | WMS v2: integrasi GS1 barcode, Zebra, warehouse + pengiriman (Field Lead) | Python, Go, TypeScript | Mar 2025 (approx) |
| 9 | App WMS | AppSheet | Apr 2025 (approx) |
| 10 | Temuan & pelaporan celah keamanan ke tim SOC | — | May 2025 (approx) |
| 11 | Dashboard stock external | Apps Script, Spreadsheet | Jun 2025 (approx) |
| 13 | Software ticketing permintaan sampel | Apps Script, React | Jul 2025 (approx) |
| 15 | App konfigurasi temperature logger massal | Python (default; koreksi bila salah) | Aug 2025 (approx) |
| 17 | AppSheet stock opname perusahaan | AppSheet | Sep 2025 (approx) |

## Open questions

- Q1: SETTLED (split disetujui).
- Q2: SETTLED (tahun approx sesuai tabel; key `core-year` unik per core).
- Q3 SETTLED: 5 item freelance masuk `data.ts` (Nov 2024, Early 2025,
  Jan 2025, Mar 2025 approx, Jul 2026). Key `core-year` unik per core.
  Catatan: item EKG ditulis "Early 2025" agar tidak tabrakan key dengan
  item akuntansi perbankan "Jan 2025".
- Q4 SETTLED: 6 item AI masuk `data.ts` (Late 2024, Early 2025,
  Mid 2025, Aug 2025 approx untuk OpenCode, Sep 2025 voice SO agent,
  Sep 2026 AI workspace). Key `core-year` unik per core.
  Catatan: ejaan harness ditulis "Hermess" sesuai ucapan user, koreksi
  bila salah. Sertifikat Claude 101 (Mar 2026) sudah ada di
  `certifications`, tidak diduplikasi di milestone.
