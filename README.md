# matkumatmat

> **Bridge Builder — BioFarma PBF Logistics × Go/Rust Systems × Python Automation**

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=18&duration=2200&pause=900&color=00E5FF&center=true&vCenter=true&width=700&lines=Go+%2B+Rust+%2B+Python+%2B+TypeScript;Automating+PBF+BioFarma+logistics+with+ZPL+%26+TCP%2FIP;From+thermal+printer+to+trading+engine" alt="typing" />

---

### whoami

```py
whoami = {
  "handle": "matkumatmat",
  "role": "Backend / Systems Engineer — PBF BioFarma",
  "focus": ["Zebra ZPL printing infra", "Inventory & WMS", "Rust systems", "Trading automation"],
  "stack": ["Go", "Rust", "Python", "TypeScript"],
  "currently": "Migrating Python inventory stack → Go + Rust (gzebra-pbf, berusty)",
  "location": "Indonesia — mamattewahyu@gmail.com",
  "since": "2023-11-11 · 444 contributions · 51 repos"
}
```

**What I actually build:** bridge service yang nyambungin **Google AppSheet / Apps Script → Zebra thermal printer via ZPL over TCP/IP**, biar label alamat & identitas produk di gudang PBF keluar presisi tanpa drama. Bukan todo-app template.

---

### Tech Stack

<p>
  <img src="https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white" />
  <img src="https://img.shields.io/badge/Rust-000000?style=flat&logo=rust&logoColor=white" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/SQLx-FF6B6B?style=flat" />
  <img src="https://img.shields.io/badge/Tokio-000000?style=flat" />
  <img src="https://img.shields.io/badge/ZPL-Zebra-000000?style=flat" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" />
</p>

```
Python ████████████████░░ 16 repos  (FastAPI, automation, scraper)
Rust   █████░░░░░░░░░░░░  5 repos  (berusty, rq, slack-clone — 2025→)
TypeScript ███░░░░░░░░░░  3 repos  (fullstack PBF, marketplace)
Go     █░░░░░░░░░░░░░░░░  1 repo   (gzebra-pbf — production grade)
HTML/ZPL etc             7 repos
```

---

### Featured — pinned yang beneran mature

| | Project | Why it matters | Stack |
|---|---|---|---|
| **01** | **[gzebra-pbf](https://github.com/matkumatmat/gzebra-pbf)** — ⭐ production | Go bridge service Go→Zebra (ZPL/TCP). DDD: domain/usecase/repo, cron retry, FS queue, shipping & identity templates, shipped as `pbf-bridge.exe`. Dipakai di alur logistik PBF beneran. | `Go · ZPL · Shell` · 11 commits · 29MB |
| **02** | **[k-plugin-skills-claude-code](https://github.com/matkumatmat/k-plugin-skills-claude-code)** ⭐ 1 | Meta-skill framework buat Claude Code dengan TDD methodology. Bukan skill kaleng-kaleng — ada templates, prompts, references. | `Skill Engineering` |
| **03** | **[v1-fullstack-PBF](https://github.com/matkumatmat/v1-fullstack-PBF)** | Fullstack Inventory Control PBF — FastAPI + Alembic + TS frontend. Codebase terbesar (807k TS). 30 commits. | `TypeScript · Python · FastAPI` |
| **04** | **[rq](https://github.com/matkumatmat/rq)** | Data layer eksperimental: `tokio + sqlx (postgres/sqlite) + reqwest`. Fondasi buat trading/data pipeline. | `Rust` · 5MB |
| **05** | **paffcode-ai** *(private · 53MB TS)* | Private flagship — TS codebase terbesar se-akun. Next candidate untuk di-public-kan. | `TypeScript` |
| **06** | **[slack-clone](https://github.com/matkumatmat/slack-clone)** | Clone dengan split `backend/frontend`, `AGENTS.md`, `rust-toolchain.toml` — playground Rust fullstack. | `Rust · HTML` |

> Pinned ideal = 6 slot. Sekarang baru 1 kepake. Rekomendasi urutan di atas biar profile gak keliatan kosong.

---

### Architecture highlight: `gzebra-pbf`

```
AppSheet / Apps Script  ──HTTP──▶  pbf-bridge (Go)
                                    ├─ IdentityUseCase  → ZPL template: product.txt
                                    ├─ ShippingUseCase  → ZPL template: shipping.txt
                                    ├─ PendingJobRepository (filesystem queue)
                                    ├─ Printer (socket / bidirectional TCP)
                                    └─ Cron worker (retry failed jobs) + JSON logging
                                              ──TCP:9100/9112──▶ Zebra Printer
```

ENV:
```env
SERVER_PORT=8080
PRINTER_IP=192.168.19.5
PRINTER_PORT=9112
PRINTER_TIMEOUT_SEC=5
PENDING_JOB_PATH=./data/pending
SHIPPING_TEMPLATE_PATH=./templates/shipping.txt
IDENTITY_TEMPLATE_PATH=./templates/product.txt
```

---

### GitHub Stats

<p>
  <img src="https://github-readme-stats.vercel.app/api?username=matkumatmat&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=00E5FF&icon_color=00E5FF&text_color=c9d1d9&count_private=true" height="150" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=matkumatmat&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=00E5FF&text_color=c9d1d9&langs_count=6" height="150" />
</p>

<p>
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=matkumatmat&theme=tokyonight&hide_border=true&background=0D1117&ring=00E5FF&fire=00E5FF&currStreakLabel=00E5FF" />
</p>

<p>
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=matkumatmat&theme=tokyo-night&bg_color=0d1117&color=00E5FF&line=00E5FF&point=ffffff&hide_border=true" />
</p>

---

### Timeline — dari Python ke Rust

```
2023-11  join GitHub
2024     Python era: zpl_label, muscle-wiki-scraper, RESTful POS APIs
2025-07  PBF blitz: v1-fullstack-PBF, v1-inventory_control, labeling, kaayeey-sides
2025-10  marketplace-autoparts (TS)
2026-03  k-plugin-skills-claude-code (skill engineering)
2026-04  gzebra-pbf lahir — Go production
2026-06  paffcode-ai (53MB, private TS flagship)
2026-08  Rust pivot: berusty, rq, slack-clone, serverr, fckode, pxxxstore
2026-...  Next: polish READMEs + public-kan paffcode-ai
```

---

### Outside `gzebra-pbf` — local PROJECT stack

```
PROJECT/
├── PBF-BACKEND-RS/   → Rust rewrite dari PBF backend (Cargo workspace)
├── PBF-BACKEND/      → FastAPI inventory
├── PBF-CLIENT/       → AppSheet client
├── TRADING/ & STOCK-PRICE/ → quant-tradez, trading engine
├── PORTO/            → React + Vite portfolio (TS)
└── PROFILE-GH/       → repo ini — source buat github.com/matkumatmat/matkumatmat
```

---

### Contact

<p>
  <a href="mailto:mamattewahyu@gmail.com"><img src="https://img.shields.io/badge/Email-mamattewahyu@gmail.com-EA4335?style=flat&logo=gmail&logoColor=white" /></a>
  <a href="https://github.com/matkumatmat"><img src="https://img.shields.io/badge/GitHub-matkumatmat-181717?style=flat&logo=github&logoColor=white" /></a>
</p>

```bash
# quick ping
gh api users/matkumatmat --jq .html_url
# → https://github.com/matkumatmat
```

---

<sub>Repo ini adalah source untuk profile README di <code>github.com/matkumatmat/matkumatmat</code>. Push README.md ini ke repo <code>matkumatmat/matkumatmat</code> biar muncul di atas pinned. <br/> Built with Go/Rust/Python obsession & BioFarma logistics pain — 444 contributions and counting.</sub>

<!--
Mau hide stats private? ganti count_private=true -> false
Mau ganti tema? tokyonight -> dark / radical / gruvbox
-->
