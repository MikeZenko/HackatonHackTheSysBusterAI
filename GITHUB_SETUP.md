# GitHub Setup Instructions

## 1. Create a New Repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `debtbuster-ai`
3. Description: "AI-powered debt management and loan comparison tool for Hack the System 2025"
4. Choose: **Public** repository
5. **DON'T** initialize with README, .gitignore, or license (we already have them)
6. Click "Create repository"

## 2. Push Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR_USERNAME/debtbuster-ai.git

# Verify the remote was added
git remote -v

# Push to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## 3. Set Up Vercel Integration

### Option A: Automatic Deployment (Recommended)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Connect your GitHub account if not already connected
4. Select the `debtbuster-ai` repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Option B: GitHub Actions Deployment

If you want to use the GitHub Actions workflow:

1. In your Vercel dashboard, go to Account Settings
2. Create a new token: Settings → Tokens → Create
3. In your GitHub repository:
   - Go to Settings → Secrets and variables → Actions
   - Add these secrets:
     - `VERCEL_TOKEN`: Your Vercel token
     - `VERCEL_ORG_ID`: Found in Vercel project settings
     - `VERCEL_PROJECT_ID`: Found in Vercel project settings

## 4. Configure Repository Settings

In your GitHub repository settings:

1. **About section**:
   - Description: "AI-powered debt management and loan comparison tool"
   - Website: Your Vercel deployment URL
   - Topics: `nextjs`, `typescript`, `tailwindcss`, `fintech`, `hackathon`

2. **Default branch**:
   - Ensure `main` is the default branch

3. **Pages** (optional):
   - You can enable GitHub Pages for the docs if needed

## 5. Add Repository Badges

Update your README.md with status badges:

```markdown
![Deploy Status](https://img.shields.io/github/deployments/YOUR_USERNAME/debtbuster-ai/production?label=vercel&logo=vercel)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
```

## 6. Useful Git Commands

```bash
# Check status
git status

# View commit history
git log --oneline

# Create a new branch
git checkout -b feature/new-feature

# Push changes
git add .
git commit -m "Your commit message"
git push

# Pull latest changes
git pull origin main
```

## 7. Collaboration Settings

If working with a team:

1. Go to Settings → Manage access
2. Click "Invite a collaborator"
3. Add team members by username or email

## 8. Protect Main Branch (Optional)

For production safety:

1. Settings → Branches
2. Add rule → Branch name pattern: `main`
3. Enable:
   - Require pull request reviews
   - Require status checks to pass
   - Include administrators

## Ready to Push!

Your code is ready to be pushed to GitHub. Follow the commands in section 2 to push your code.