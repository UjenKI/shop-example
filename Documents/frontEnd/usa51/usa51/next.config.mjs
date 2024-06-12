/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MY_EMAIL: process.env.MY_EMAIL,
    MY_PASSWORD: process.env.MY_PASSWORD,
    NEXT_PUBLIC_FAST_API_ENDPOINT: process.env.NEXT_PUBLIC_FAST_API_ENDPOINT,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
