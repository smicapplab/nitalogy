/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    JWT_TOKEN_SECRET: process.env.JWT_TOKEN_SECRET,
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    NEXT_PUBLIC_FB_APP_ID: process.env.NEXT_PUBLIC_FB_APP_ID,
    ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
    ACCESS_KEY_SECRET: process.env.ACCESS_KEY_SECRET,
    BUCKET_ISSUER_URL: process.env.BUCKET_ISSUER_URL,
    BUCKET_ISSUER_DOCUMENTS: process.env.BUCKET_ISSUER_DOCUMENTS,
  },
};

module.exports = nextConfig;
