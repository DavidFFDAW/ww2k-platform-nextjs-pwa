import HomeLinks from '@/components/HomeLinks';
import NativeLink from '@/components/NativeLink';
import { BsFileTextFill } from 'react-icons/bs';
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
                <div className="w1 flex center al-center h1">
                    <div className="w1 flex center column al-center h1">
                        <HomeLinks
                            text={'BLOG'}
                            icon={<BsFileTextFill />}
                            href={'/blog'}
                        />
                    </div>
                </div>
                {/* <CustomImage src={'/wallpaper.jpeg'} alt={'WWE 2K23'} /> */}
            </div>
        </>
    );
};

export default Index;
