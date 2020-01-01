#!/usr/bin/env sh

# abort on errors
set -e

echo "VUE_APP_API_KEY=$VUE_APP_API_KEY" > ./.env
echo "VUE_APP_MESSAGING_SENDER_ID=$VUE_APP_MESSAGING_SENDER_ID" >> ./.env
echo "VUE_APP_APP_ID=$VUE_APP_APP_ID" >> ./.env
echo "VUE_APP_MEASUREMENT_ID=$VUE_APP_MEASUREMENT_ID" >> ./.env



echo ./.env


# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:nomura-lab/portfolio-template.git master:gh-pages

cd -