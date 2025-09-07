# Deployment Instructions for Vercel

## Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (already done):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```
   Follow the prompts to authenticate with your email.

3. **Deploy to Production**:
   ```bash
   vercel --prod
   ```
   
   During first deployment, you'll be asked:
   - Set up and deploy? **Y**
   - Which scope? **Select your account**
   - Link to existing project? **N** (for first time)
   - Project name? **debtbuster-ai** (or press enter for default)
   - Directory location? **./** (press enter)
   - Want to override settings? **N**

## Option 2: Deploy via GitHub Integration

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - DebtBuster AI"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

## Option 3: Deploy via Vercel Dashboard

1. **Install Vercel for GitHub/GitLab/Bitbucket**:
   - Visit [vercel.com/new](https://vercel.com/new)
   - Import the project from your Git provider
   - All settings are pre-configured in `vercel.json`

## Environment Variables (Optional)

If you need to add environment variables:
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add any required variables

## Post-Deployment

After deployment, you'll receive:
- Production URL: `https://debtbuster-ai.vercel.app` (or similar)
- Preview URLs for each commit
- Automatic HTTPS/SSL
- Global CDN distribution

## Build Settings (Already Configured)

The project includes:
- `vercel.json` with build configuration
- `.vercelignore` to exclude unnecessary files
- TypeScript and Next.js optimizations
- Production-ready build

## Troubleshooting

If you encounter issues:
1. Ensure all dependencies are in `package.json`
2. Check TypeScript errors: `npm run build`
3. Review Vercel build logs in the dashboard
4. Verify Node.js version compatibility (18.x or higher)

## Custom Domain (Optional)

To add a custom domain:
1. Go to project settings in Vercel
2. Navigate to "Domains"
3. Add your domain and follow DNS instructions