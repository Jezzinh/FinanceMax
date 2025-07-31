#!/bin/bash
echo "Building application for Vercel..."
npm install
npm run build
echo "Build complete! Ready for Vercel deploy."