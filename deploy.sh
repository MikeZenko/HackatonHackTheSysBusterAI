#!/bin/bash

echo "🚀 DebtBuster AI Deployment Script"
echo "=================================="
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
else
    echo "✅ Vercel CLI is installed"
fi

# Check if logged in to Vercel
echo ""
echo "📝 Checking Vercel authentication..."
vercel whoami &> /dev/null
if [ $? -ne 0 ]; then
    echo "❌ Not logged in to Vercel"
    echo "👉 Please run: vercel login"
    exit 1
else
    echo "✅ Logged in to Vercel"
fi

# Build the project
echo ""
echo "🔨 Building the project..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi
echo "✅ Build successful"

# Deploy to Vercel
echo ""
echo "🚀 Deploying to Vercel..."
echo "👉 Follow the prompts below:"
echo ""
vercel --prod

echo ""
echo "✨ Deployment complete!"
echo "📱 Don't forget to update the README with your deployment URL"