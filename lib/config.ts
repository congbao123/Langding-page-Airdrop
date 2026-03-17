export const getBaseUrl = () => {
  // 1. If an explicit absolute URL is provided via .env
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  
  // 2. Vercel specific environments
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  // 3. Generic VPS/Hosting environment (e.g., node server.js with PORT)
  // Usually, in a generic host, you must define NEXT_PUBLIC_SITE_URL.
  // But we can fallback to localhost if we are in development
  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 3000;
    return `http://localhost:${port}`;
  }

  // 4. Absolute Fallback
  return "https://landing-page-airdrop.vercel.app";
};
