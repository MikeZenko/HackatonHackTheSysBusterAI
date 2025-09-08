# 🚀 Deploy to Vercel - Quick Guide

Your code is already on GitHub at: https://github.com/MikeZenko/HackatonHackTheSysBusterAI

## Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Go to Vercel Import Page**
   - Visit: [https://vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"

2. **Connect GitHub (if not already connected)**
   - Click "Add GitHub Account"
   - Authorize Vercel

3. **Import Your Repository**
   - Search for "HackatonHackTheSysBusterAI"
   - Click "Import"

4. **Configure Project**
   - Project Name: `debtbuster-ai` (or keep default)
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (leave as is)
   - Build Settings: (leave defaults)
     - Build Command: `npm run build`
     - Output Directory: `.next`
     - Install Command: `npm install`

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your app will be live!

## Option 2: Deploy via Vercel CLI

```bash
# If not already logged in
vercel login

# Deploy to production
vercel --prod
```

When prompted:
- Set up and deploy? **Y**
- Which scope? **Your account**
- Link to existing project? **N** (first time) or **Y** (if already exists)
- Project name? **debtbuster-ai**
- Directory? **./**

## 🔄 Automatic Deployments

Once connected, Vercel will automatically deploy:
- Every push to `main` branch → Production
- Every pull request → Preview deployment

## 🌐 Your URLs

After deployment, you'll get:
- Production: `https://debtbuster-ai.vercel.app`
- Preview: `https://debtbuster-ai-[hash].vercel.app`

## ✅ Verify Deployment

1. Check deployment status: [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. View build logs if any issues
3. Your app should show:
   - Styled navigation
   - Hero section with animations
   - All pages working
   - No white page issues

## 🛠️ Troubleshooting

If you see issues:
1. Check Vercel build logs
2. Ensure all dependencies are in package.json
3. Clear browser cache
4. Check console for errors

## 📊 Vercel Features

Your deployment includes:
- Automatic HTTPS
- Global CDN
- Instant rollbacks
- Analytics (optional)
- Web Vitals monitoring

## 🔗 Custom Domain (Optional)

To add custom domain:
1. Go to project settings
2. Domains tab
3. Add your domain
4. Update DNS records