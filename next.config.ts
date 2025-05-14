import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

export const CONFIG = {
  API_URL: process.env.NEXT_PUBLIC_API_URL as string,
} as const;

export default nextConfig;
