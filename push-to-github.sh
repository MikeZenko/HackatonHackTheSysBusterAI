#!/bin/bash

echo "🚀 DebtBuster AI - GitHub Push Helper"
echo "===================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Git is not initialized in this directory"
    exit 1
fi

# Check if remote origin exists
git remote get-url origin &> /dev/null
if [ $? -ne 0 ]; then
    echo "❌ No remote origin found"
    echo ""
    echo "👉 Please add your GitHub repository:"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/debtbuster-ai.git"
    echo ""
    echo "Replace YOUR_USERNAME with your GitHub username"
    exit 1
fi

# Show current remote
echo "📍 Current remote origin:"
git remote get-url origin
echo ""

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  You have uncommitted changes:"
    git status --short
    echo ""
    read -p "Do you want to commit these changes? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        read -p "Enter commit message: " commit_msg
        git add -A
        git commit -m "$commit_msg"
    fi
fi

# Push to GitHub
echo ""
echo "🚀 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "📝 Next steps:"
    echo "1. Visit your repository on GitHub"
    echo "2. Go to vercel.com/new to deploy"
    echo "3. Import your GitHub repository"
    echo "4. Your app will be live in minutes!"
else
    echo ""
    echo "❌ Push failed. Please check your credentials and try again."
    echo ""
    echo "If you haven't set up the remote yet:"
    echo "git remote add origin https://github.com/YOUR_USERNAME/debtbuster-ai.git"
fi