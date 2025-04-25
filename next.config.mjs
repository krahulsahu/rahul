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
  devIndicators: {
    buildActivity: false, // Disable the build activity indicator
    disableRuntimeJS: false, // Disable runtime JS related indicators (optional)
    disabled: true,
  },
};

export default nextConfig
