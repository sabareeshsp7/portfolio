# Vercel Analytics Integration

This portfolio includes Vercel Analytics and Speed Insights for comprehensive tracking and performance monitoring.

## Features Integrated

✅ **Vercel Analytics** - Track page views, user interactions, and site analytics
✅ **Vercel Speed Insights** - Monitor Core Web Vitals and performance metrics
✅ **SEO Optimization** - Enhanced meta tags for better search visibility
✅ **Social Media Integration** - Open Graph and Twitter Card support

## Analytics Components

The analytics are integrated in `src/layouts/BaseLayout.astro`:

```astro
import Analytics from '@vercel/analytics/astro';
import SpeedInsights from '@vercel/speed-insights/astro';

// Components are added to the body
<Analytics />
<SpeedInsights />
```

## Deployment

1. Deploy to Vercel using:
   ```bash
   vercel --prod
   ```

2. Analytics will automatically start collecting data once deployed

3. Visit your Vercel dashboard to view:
   - Page views and user interactions
   - Performance metrics and Core Web Vitals
   - Real-time visitor data

## Configuration

The `vercel.json` file includes:
- Analytics enabled: `"analytics": { "enable": true }`
- Speed Insights enabled: `"speedInsights": { "enable": true }`
- Optimized build settings for Astro

## SEO Benefits

Enhanced meta tags include:
- Comprehensive page descriptions
- Social media optimization (Open Graph, Twitter Cards)
- Proper keywords and author information
- Structured data for search engines

After deployment, you'll see analytics data in your Vercel dashboard within 30 seconds to a few minutes.
