#!/bin/bash

yarn install
yarn build


# Commit to main branch
git add .
 
msg="Updating Docs"
git commit -m "${msg}"
 
git push

mv build/ ../

# Checkout new branch (delete it first if it already exists)
git branch -D gh-pages &>/dev/null
git checkout -b gh-pages


# Delete everything except .git folder
shopt -s extglob
rm -rf !('.git/*')
rm -rf .docusaurus
rm -rf .gitignore

# Move built site into this branch
mv ../build/* .
rm -rf ../build

# Force commit (overwrite) to gh-pages branch
git add .
git commit -m "${msg}"

git push --set-upstream origin gh-pages --force

git checkout main