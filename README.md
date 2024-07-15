# Pristine Clean
Website for www.pristineclean.com.au built with the default Gatsby starter


# Deploy instructions
Circle CI seems broken, so run these commands locally on your laptop:

```bash
# Using node v12
yarn install

yarn build

cd ./public

# Serve the built HTML/JS files
python -m http.server 8000

# Navigate to localhost:8000 in your browser and test that the webpage looks fine

cd ..

aws s3 cp --recursive ./public/ s3://www.pristineclean.com.au

aws configure set preview.cloudfront true; aws cloudfront create-invalidation --distribution-id E1TG52R0R5X2CD --paths /
```