import '@/styles/global.css';
import '@/styles/laravel-old-style.css';
import Head from 'next/head';
import UserContextProvider from '@/context/UserContext';

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>WWE-2K</title>
            </Head>
            <UserContextProvider>
                <Component {...pageProps} cookies={pageProps.cookies} />
            </UserContextProvider>
        </>
    );
};

export default MyApp;
