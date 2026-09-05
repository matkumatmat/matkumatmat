#!/bin/bash
set -e
cd "$(dirname "$0")"
echo "== PROFILE-GH push helper =="
echo "Target repo: matkumatmat/matkumatmat (special profile repo)"
echo ""

# cek repo udah ada belum
if gh api repos/matkumatmat/matkumatmat --jq .html_url 2>/dev/null; then
  echo "✓ Repo matkumatmat/matkumatmat sudah ada"
  TMP=$(mktemp -d)
  echo "→ Cloning ke $TMP ..."
  gh repo clone matkumatmat/matkumatmat "$TMP/profile" 2>&1 || git clone https://github.com/matkumatmat/matkumatmat.git "$TMP/profile"
  cp -v README.md "$TMP/profile/README.md"
  cd "$TMP/profile"
  git add README.md
  if git diff --cached --quiet; then
    echo "No changes to commit"
  else
    git commit -m "feat: update profile README — gzebra-pbf + rust pivot"
    git push
    echo "✓ Pushed!"
  fi
  echo "→ Preview: https://github.com/matkumatmat"
else
  echo "✗ Repo belum ada — bikin dulu:"
  echo "  gh repo create matkumatmat/matkumatmat --public --description \"Hi, I'm matkumatmat\" "
  echo ""
  read -p "Mau paff bikin sekarang? [y/N] " ans
  if [[ "$ans" == "y" || "$ans" == "Y" ]]; then
    echo "→ Creating repo..."
    # bikin via API
    gh repo create matkumatmat/matkumatmat --public --description "Bridge Builder — BioFarma PBF × Go/Rust × Python" --confirm 2>&1 || {
      echo "gh create gagal, coba manual: github.com/new -> name: matkumatmat"
      exit 1
    }
    TMP=$(mktemp -d)
    gh repo clone matkumatmat/matkumatmat "$TMP/profile"
    cp -v "$(dirname "$0")/README.md" "$TMP/profile/README.md"
    cd "$TMP/profile"
    git add README.md
    git commit -m "feat: init profile README"
    git push
    echo "✓ Done! Cek https://github.com/matkumatmat"
  else
    echo ""
    echo "Alternatif manual:"
    echo "1. Buka https://github.com/new"
    echo "2. Repository name: matkumatmat"
    echo "3. Public + Add README"
    echo "4. Upload README.md dari PROJECT/PROFILE-GH/README.md"
  fi
fi
