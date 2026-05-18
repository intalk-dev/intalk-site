#!/bin/bash
VAULT="../../vault/intalk-obsidian"
SITE_DIR="$(cd "$(dirname "$0")" && pwd)"
CONTENT="$SITE_DIR/src/content"

rm -rf "$CONTENT/analysis" "$CONTENT/proposals"
mkdir -p "$CONTENT/analysis" "$CONTENT/proposals"

find "$VAULT/90_analysis/weekly/" -name "*.md" ! -name "README.md" -exec cp {} "$CONTENT/analysis/" \; 2>/dev/null
find "$VAULT/91_proposals/" -name "*.md" ! -name "README.md" -exec cp {} "$CONTENT/proposals/" \; 2>/dev/null

echo "동기화 완료: $(find "$CONTENT" -name '*.md' | wc -l)개 파일"
