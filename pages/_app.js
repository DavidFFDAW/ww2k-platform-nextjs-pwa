import '@/styles/global.css';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>WWE-2K</title>
            </Head>
            <Component {...pageProps} cookies={pageProps.cookies} />
        </>
    );
};

export default MyApp;
