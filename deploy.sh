#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m '新增導覽列以及登入驗證功能'

# if you are deploying to https://4080e068.github.io
# git push -f git@github.com:4080e068/4080e068.github.io.git main

# if you are deploying to https://4080e068.github.io/vite
git push -f https://github.com/4080E68/vue_Estore.git

cd -