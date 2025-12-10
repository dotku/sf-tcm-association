# Deployment Guide - SF Bay Area TCM Association

## Vercel Deployment

### Prerequisites
- Vercel account
- GitHub repository (recommended)

### Quick Deploy

#### Option 1: Deploy via Vercel CLI
```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

#### Option 2: Deploy via GitHub
1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Important Files for Deployment
- ✅ `proxy.ts` - Language routing (Next.js 16 compatible)
- ✅ `vercel.json` - Vercel configuration
- ✅ `.vercelignore` - Files to ignore during deployment
- ✅ `next.config.ts` - Next.js configuration with next-intl

### Environment Variables
No environment variables required for basic deployment.

### Build Configuration
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

### Post-Deployment
After deployment, your site will be available at:
- Production: `https://your-project.vercel.app`
- English version: `https://your-project.vercel.app/en`
- Chinese version: `https://your-project.vercel.app/zh`

### Troubleshooting

#### 500 Error - MIDDLEWARE_INVOCATION_FAILED
✅ **Fixed** - Updated from `middleware.ts` to `proxy.ts` for Next.js 16 compatibility

#### Build Fails
- Ensure all dependencies are installed: `npm install`
- Test local build: `npm run build`
- Check Node.js version: `node --version` (should be 18.x or higher)

#### Routes Not Working
- Verify `proxy.ts` exists in the root directory
- Check `i18n/routing.ts` configuration
- Ensure `[locale]` folder structure in `app/` directory

### Custom Domain
1. Go to your project in Vercel Dashboard
2. Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

## Support
For issues, check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
