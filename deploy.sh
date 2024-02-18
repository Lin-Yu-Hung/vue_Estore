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
git commit -m '[修正] 修正錯誤訊息'

# if you are deploying to https://4080e068.github.io
# git push -f https://github.com/4080E68/vue_Estore.git main

# if you are deploying to https://4080e068.github.io/vite
git push origin main

cd -