/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    headers: () => [
        {
            // Create glob to target specific pages you want
            source: "/*",
            headers: [
                {
                    key: "Cache-Control",
                    value: "no-store",
                },
            ],
        },
    ],
};

module.exports = nextConfig;
