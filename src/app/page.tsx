import PageBackground from '@/components/PageBackground/PageBackground';
import HomeLink from '@/components/HomeLink/HomeLink';
import { PublicMenu } from '@/constants/routes';
import { BootstrapIcon } from '@/components/Icon/BootstrapIcon';

function Home() {
    return (
        <PageBackground custom={'principal'}>
            <div className="dashboard-home flex end column acenter">
                <div className="home-spas-links">
                    {PublicMenu.map((item, index) => {
                        return <HomeLink href={item.url} icon={<item.icon />} text={item.name} key={index} />;
                    })}
                    <HomeLink href={'/roster'} text={'Roster'} icon={<BootstrapIcon icon={'list-ul'} />} />
                </div>
            </div>
        </PageBackground>
    );
}

export default Home;
