/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    FACEBOOK_PIXEL_ID: process.env.FACEBOOK_PIXEL_ID,
  },
}

export default nextConfig