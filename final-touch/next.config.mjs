/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: process.env.BASE_PATH ? process.env.BASE_PATH : "",
    assetPrefix: process.env.URL ? process.env.URL : undefined,

    images: {
        domains: ["firebasestorage.googleapis.com"]

    }
};

export default nextConfig;