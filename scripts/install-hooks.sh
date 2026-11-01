#!/bin/sh
set -eu

root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd -P)
cd "$root"

if [ ! -e .git ]; then
  echo "No Git checkout found; pre-push hook was not installed."
  exit 0
fi

if ! command -v git >/dev/null 2>&1; then
  echo "Git is required to install the pre-push hook." >&2
  exit 1
fi

if git config --get core.hooksPath >/dev/null; then
  echo "core.hooksPath is configured; resolve it before installing the pre-push hook." >&2
  exit 1
else
  status=$?
  if [ "$status" -ne 1 ]; then
    echo "Could not inspect Git hook configuration." >&2
    exit "$status"
  fi
fi

hooks=$(git rev-parse --git-path hooks)
target="$root/.githooks/pre-push"
hook="$hooks/pre-push"
if [ ! -x "$target" ]; then
  echo "The repository pre-push hook is missing or not executable." >&2
  exit 1
fi
if [ -L "$hook" ] && [ "$(readlink "$hook")" = "$target" ]; then
  echo "Pre-push hook already installed."
elif [ -e "$hook" ] || [ -L "$hook" ]; then
  echo "Existing pre-push hook at $hook; resolve it before installation." >&2
  exit 1
else
  mkdir -p "$hooks"
  ln -s "$target" "$hook"
  echo "Installed pre-push hook at $hook."
fi
