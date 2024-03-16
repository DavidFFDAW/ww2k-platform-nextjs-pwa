import PageBackground from "@/components/PageBackground/PageBackground";
import HomeLink from "@/components/HomeLink/HomeLink";
import { PublicMenu } from "@/constants/routes";
import { BootstrapIcon } from "@/components/Icon/BootstrapIcon";
import BodyDeletableClass from "@/components/PageBackground/BodyDeletableClass";

function Home() {
    return (
        <>
            <BodyDeletableClass className="custom-totalpage-body-wallpaper custom-wallpaper principal" />
            <div className="dashboard-home flex end column acenter">
                <div className="home-spas-links">
                    {/* {PublicMenu.map((item, index) => {
                        return (
                            <HomeLink
                                href={item.url}
                                icon={<item.icon />}
                                text={item.name}
                                key={index}
                            />
                        );
                    })} */}
                    <HomeLink
                        href={"/roster"}
                        text={"Roster"}
                        icon={<BootstrapIcon icon={"list-ul"} />}
                    />
                    <HomeLink
                        text={"Admin"}
                        href={"/admin"}
                        className="admin"
                        icon={<BootstrapIcon icon={"lock-fill"} />}
                    />
                    <HomeLink
                        href={"/blog"}
                        text={"Blog"}
                        icon={<BootstrapIcon icon={"newspaper"} />}
                    />
                    <HomeLink
                        href={"/twitter"}
                        text={"Twitter"}
                        className="twitter"
                        icon={<BootstrapIcon icon={"twitter-x"} />}
                    />
                </div>
            </div>
        </>
    );
}

export default Home;
