/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ray test touch <
  env: {
    infuraKey: process.env.INFURA_KEY,
    alchemyKey: process.env.ALCHEMY_KEY,
    magicKey: process.env.MAGIC_KEY
  }
  // ray test touch >
};

module.exports = nextConfig;