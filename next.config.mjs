/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "coding-challenge-api.aerolab.co",
      },
    ],
  },
};

export default nextConfig;
