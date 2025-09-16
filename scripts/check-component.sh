#!/usr/bin/env bash
set -u

# --- helpers ---
die() { echo "❌ $*" >&2; exit 1; }
found() { [ -f "$1" ]; }

# --- arg parsing ---
[ $# -ge 1 ] || die "Usage: $0 <ComponentName|path/to/Component[.tsx]>"
ARG="$1"
BASE="src/components"

# Infer dir/stem/tsx/css
if [[ "$ARG" == *.tsx || "$ARG" == *.ts ]]; then
  TSX="$ARG"
  DIR="$(dirname "$TSX")"
  STEM="$(basename "$TSX" | sed 's/\.[tj]sx\?$//')"
elif [[ -d "$ARG" ]]; then
  DIR="$ARG"
  STEM="$(basename "$DIR")"
  TSX="$DIR/$STEM.tsx"
else
  # bare name -> assume src/components/<Name>/<Name>.tsx
  STEM="$(basename "$ARG")"
  DIR="$BASE/$STEM"
  TSX="$DIR/$STEM.tsx"
fi

# fallback: first .tsx in dir
if ! found "$TSX" && [ -d "$DIR" ]; then
  TSX="$(ls "$DIR"/*.tsx 2>/dev/null | head -n1 || true)"
fi
found "$TSX" || die "TSX nicht gefunden. Gesucht in: $DIR"

# CSS candidates (prefer exact, then module.css, then any .css)
CSS_CANDIDATES=(
  "$DIR/$STEM.css"
  "$DIR/$STEM.module.css"
)
if ! found "${CSS_CANDIDATES[0]}" && ! found "${CSS_CANDIDATES[1]}"; then
  CSS="$(ls "$DIR"/*.css 2>/dev/null | head -n1 || true)"
else
  if found "${CSS_CANDIDATES[0]}"; then CSS="${CSS_CANDIDATES[0]}"; else CSS="${CSS_CANDIDATES[1]}"; fi
fi
[ -n "${CSS:-}" ] || CSS=""

# --- pretty header ---
sep() { printf '\n\033[1;34m── %s ─────────────────────────────────────────\033[0m\n' "$1"; }

# --- cat files with line numbers ---
sep "SOURCE (TSX)  $TSX"
nl -ba "$TSX" || true

if [ -n "$CSS" ]; then
  sep "STYLES (CSS)  $CSS"
  nl -ba "$CSS" || true
else
  sep "STYLES (CSS)"
  echo "⚠️  Keine CSS-Datei gefunden im Ordner $DIR"
fi

# --- lint TSX ---
sep "ESLINT"
# continue on error to show CSS lint afterwards
( npx eslint --ext .js,.jsx,.ts,.tsx "$TSX" ) || true

# --- lint CSS ---
sep "STYLELINT"
if [ -n "$CSS" ]; then
  ( npx stylelint "$CSS" ) || true
else
  echo "⏭  übersprungen (keine CSS-Datei)"
fi

echo
sep "FERTIG"
