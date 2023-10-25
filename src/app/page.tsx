import PageBackground from '@/components/PageBackground/PageBackground';
import HomeLink from '@/components/HomeLink/HomeLink';
import { PublicMenu } from '@/constants/routes';

function Home() {
    return (
        <PageBackground custom={'principal'}>
            <div className="dashboard-home flex end column acenter">
                <div className="home-spas-links">
                    {PublicMenu.map((item, index) => {
                        return <HomeLink href={item.url} icon={<item.icon />} text={item.name} key={index} />;
                    })}
                </div>
            </div>
        </PageBackground>
    );
}

export default Home;
