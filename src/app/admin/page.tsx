import HomeLink from '@/components/HomeLink/HomeLink';
import PageBackground from '@/components/PageBackground/PageBackground';
import { AdminMenu } from '@/constants/routes';
import React from 'react'

export default function page() {
    return (
        <>
            <PageBackground>
                <div className="dashboard-home flex end column al-center">
                    <div className="home-spas-links">
                        {AdminMenu.map((item, index) => {
                            if (item.showOnSidebar)
                                return <HomeLink icon={<item.icon />} text={item.name} href={item.url} key={index} />;
                        })}
                    </div>
                </div>
            </PageBackground>
        </>
    )
}
