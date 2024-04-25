/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  transpilePackages: ["@mui/material", "@mui/icons-material", "@ui/templates"],
};

export default nextConfig;
