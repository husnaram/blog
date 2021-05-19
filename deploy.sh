#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Genterate file statis
hugo # if using a theme, replace by `hugo -t <yourtheme>`

cd public
git add -A

# Customize your commit message when run this toola
msg="Rebuild on `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push to the Github
git push origin main

# Back to the previous dir
cd ..