#!/bin/sh

set -ex

# This example requires to *not* create ES modules, therefore we pass the flag
# `--target no-modules`
wasm-pack build --target bundler

# contents tp public folder in next project
cp -r ./pkg/* ../public/web_worker/
