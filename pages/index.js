import Head from 'next/head';

const Index = () => {
    return (
        <>
            <Head>
                <title>WWE 2K Manager</title>
            </Head>

            <div
                style={{
                    width: '100%',
                    height: '100vh',
                    backgroundImage: 'url(/wallpaper.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* <CustomImage src={'/wallpaper.jpeg'} alt={'WWE 2K23'} /> */}
            </div>
        </>
    );
};

export default Index;
