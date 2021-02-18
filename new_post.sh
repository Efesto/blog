#!/bin/bash
set -e

title=$1
no_spaces=${title// /-}
no_specials=${no_spaces//[:,]/}

filename="$(date +"%Y-%m-%d")-$no_specials.md"
full_filename="_posts/$filename"

echo "---
layout: post
title: $title
---
" > "$full_filename"

code "$full_filename"