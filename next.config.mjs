/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // basePath: "/rahul",
  // devIndicators: {
  //   buildActivity: true,
  //   disableRuntimeJS: false, // Disable runtime JS related indicators (optional)
  //   disabled: true,
  // },
};

export default nextConfig
