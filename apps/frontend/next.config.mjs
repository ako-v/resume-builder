import path from "path";

const __dirname = path.resolve();

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    // this includes files from the monorepo base two directories up
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
  transpilePackages: ["@mui/material", "@mui/icons-material"],
};

export default nextConfig;
