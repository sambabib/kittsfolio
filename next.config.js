/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NETLIFY_NEXT_PLUGIN_SKIP: "true",
  },
}

module.exports = nextConfig
