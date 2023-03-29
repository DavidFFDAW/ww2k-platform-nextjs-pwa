import HomeLinks from '@/components/HomeLinks';
import { BsFileTextFill } from 'react-icons/bs';
import { SiWwe } from 'react-icons/si';
import { MdAdminPanelSettings } from 'react-icons/md';
import Head from 'next/head';
import BackgroundPage from '@/components/BackgroundPage';

const Index = () => {
    return (
        <>
            <Head>
                <title>WWE 2K Manager</title>
            </Head>

            <BackgroundPage>
                <div className="w1 flex center al-center h1">
                    <div className="w1 flex end column al-center h1 home-spas-links">
                        <HomeLinks
                            text={'BLOG'}
                            icon={<BsFileTextFill />}
                            href={'/blog'}
                        />
                        <HomeLinks
                            text={'WRESTLERS'}
                            icon={<SiWwe />}
                            href={'/wrestlers'}
                        />
                        <HomeLinks
                            text={'ADMIN'}
                            icon={<MdAdminPanelSettings />}
                            href={'/admin/'}
                        />
                    </div>
                </div>
            </BackgroundPage>
        </>
    );
};

export default Index;
