/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SERVICE: process.env.SERVICE,
        TEMPLATE: process.env.TEMPLATE,
        KEY: process.env.KEY,
        SITEKEY:process.env.SITEKEY,
      },
};

export default nextConfig;
