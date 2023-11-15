import React from 'react'
import HomeLink from '@/components/HomeLink/HomeLink';
import PageBackground from '@/components/PageBackground/PageBackground';
import { AdminMenu } from '@/constants/routes';
import { getTitle } from '@/utilities/metadatas.utility';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: getTitle(),
    description: "App admin dashboard",
};

export default function AdminDashboard() {
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
