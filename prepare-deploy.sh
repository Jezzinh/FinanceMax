#!/bin/bash

# Build the application
npm run build

# Copy built files to the location expected by the server
mkdir -p public
cp -r dist/public/* public/

echo "Deploy preparation complete. Files are ready for production."