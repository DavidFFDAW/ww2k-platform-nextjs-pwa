const withPWA = require('next-pwa')({
    dest: 'public',
    mode: 'production',
    disableDevLogs: true,
});

module.exports = withPWA({
    env: {
        ENV: process.env.APP_ENV,
    },
});
