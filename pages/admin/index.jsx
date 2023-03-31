import BackgroundPage from '@/components/BackgroundPage';
import HomeLinks from '@/components/HomeLinks';
import { BsFileTextFill } from 'react-icons/bs';
import { SiWwe } from 'react-icons/si';
import { GiChampions, GiTrophy } from 'react-icons/gi';
import { RiTeamFill } from 'react-icons/ri';
import CustomImage from '@/components/Image';
import CookieService from '@/services/cookie.service';
import config from '@/constants/config';
import { useRouter } from 'next/router';

export default function AdminHomeDashboard() {
    const imagesize = 152;

    const router = useRouter();
    const logOut = () => {
        console.log('LOGOUT');
        CookieService.remove(config.NEXT_USER);
        router.replace('/login');
    };

    return (
        <BackgroundPage>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    right: '15px',
                }}
            >
                <button class="btn btn-app" onClick={logOut()}>
                    Log Out
                </button>
            </div>
            <div className="w1 flex center al-center h1">
                <div className="w1 flex end column al-center h1 home-spas-links gap-small">
                    <CustomImage
                        src={`/icons/icon-${imagesize}x${imagesize}.png`}
                        width={imagesize}
                        height={imagesize}
                    />
                    <HomeLinks
                        text={'POSTS'}
                        icon={<BsFileTextFill />}
                        href={'/admin/posts'}
                    />
                    <HomeLinks
                        text={'LUCHADORES'}
                        icon={<SiWwe />}
                        href={'/admin/wrestlers'}
                    />
                    <HomeLinks
                        text={'EQUIPOS'}
                        icon={<RiTeamFill />}
                        href={'/admin/teams'}
                    />
                    <HomeLinks
                        text={'TÍTULOS'}
                        icon={<GiTrophy />}
                        href={'/admin/championships'}
                    />
                    <HomeLinks
                        text={'REINADOS'}
                        icon={<GiChampions />}
                        href={'/admin/championships/reigns'}
                    />
                </div>
            </div>
        </BackgroundPage>
    );
}
