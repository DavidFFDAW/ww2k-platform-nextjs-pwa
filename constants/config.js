const ENV = 'production';

const config = {
    NEXT_AUTH_KEY: 'next-auth-key',
    NEXT_USER: 'next-user-object',
    HTTP_REQUEST_URL_API:
        ENV === 'development'
            ? 'http://localhost:3000/api/'
            : 'https://ww2k-platform-nextjs-pwa.vercel.app/api/',
    getEndpoint: endpoint => {
        return config.HTTP_REQUEST_URL_API + endpoint;
    },
};

export default config;
