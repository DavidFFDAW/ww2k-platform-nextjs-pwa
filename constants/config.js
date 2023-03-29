const APPENV = 'development'; // || 'product';

const config = {
    NEXT_AUTH_KEY: 'next-auth-key',
    NEXT_USER: 'next-user-object',
    HTTP_REQUEST_URL_API:
        APPENV === 'development'
            ? 'http://localhost:3000/api'
            : 'https://ww2k-platform-nextjs-pwa.vercel.app/api',
};

export default config;
