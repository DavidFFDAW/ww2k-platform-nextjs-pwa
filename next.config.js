const withPWA = require('next-pwa')({
    dest: 'public',
    mode: 'production',
    disableDevLogs: true,
});

module.exports = withPWA({
    env: {
        ENV: process.env.APP_ENV,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'http',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
});
