#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUTPUT_DIR="$ROOT_DIR/public/projects"

mkdir -p "$OUTPUT_DIR"

projects=(
  "ship|https://d1woqw06xb054i.cloudfront.net/login"
  "brainstorm-gauntlet|https://brainstormaigauntletai.com/login"
  "national-seismic|https://www.nationalseismichazardmaps.com/"
  "ghostclone|https://app.ghostclone.xyz/en/start"
  "shipyard|https://shipyard1.vercel.app/"
  "projectzai|https://projectzai.com/"
)

for project in "${projects[@]}"; do
  name="${project%%|*}"
  url="${project#*|}"

  npx playwright screenshot \
    --device="Desktop Chrome" \
    --wait-for-timeout 5000 \
    "$url" \
    "$OUTPUT_DIR/$name.png"
done
