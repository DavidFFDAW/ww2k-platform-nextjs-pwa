'use client';
import React, { useState } from 'react';
import Image from '../Image/Image';
import Link from 'next/link';
import SidebarLink, { SidebarSubmit } from './SidebarLink';
import { BootstrapIcon } from '../Icon/BootstrapIcon';
import { logout } from '@/actions/auth.actions';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();

    const [sidebarData, setSidebarData] = useState({
        activeLink: '',
        showSidebar: true,
    });

    const toggleSidebar = () => {
        setSidebarData(p => ({ ...p, showSidebar: !p.showSidebar }));
    };

    const showSidebar = sidebarData.showSidebar ? 'shown' : '';

    return (
        <aside className={`sidebar ${showSidebar}`} id="sidebear">
            <button type="button" role="button" className="btn close responsive" onClick={toggleSidebar}></button>

            <div className="flex center sidebar-image-container">
                <Link href={'/admin'} title="Image Dashboard Link">
                    <Image
                        src={'/icons/icon-512x512.png'}
                        width={128}
                        height={128}
                        className="sidebar-image-logo"
                        alt="Image Dashboard Logo"
                    />
                </Link>
            </div>

            <div className="flex center links-container-big">
                <div className="sidebar-links-container links">
                    <SidebarLink active={pathname.includes('/admin/wrestlers')} icon="list-ul" to={'/admin/wrestlers'} text="Wrestlers" />
                    <SidebarLink active={pathname.includes('/admin/blog')} icon="newspaper" to={'/admin/blog'} text="Blog" />
                    <SidebarLink active={pathname.includes('/admin/twitter')} icon="twitter-x" to={'/admin/twitter'} text="Twitter" />
                    <SidebarLink active={pathname.includes('/admin/teams')} icon="people-fill" to={'/admin/teams'} text="Teams" />
                    <SidebarLink active={pathname.includes('/admin/championships')} icon="trophy" to={'/admin/championships'} text="Championships" />
                    <SidebarLink active={pathname.includes('/admin/draft')} icon="arrows-move" to={'/admin/draft'} text="Draft" />
                    <SidebarLink active={pathname.includes('/admin/exportation')} icon="cloud-download" to={'/admin/exportation'} text="Exportacion" />
                    <form action={logout} className='w1'>
                        <SidebarSubmit icon="signpost" text="Logout" />
                    </form>
                </div>
            </div>

            <button className="btn-sidebar btn-open-sidebar" onClick={toggleSidebar}>
                {sidebarData.showSidebar ? (
                    <BootstrapIcon icon={'chevron-left'} />
                ) : (
                    <BootstrapIcon icon={'chevron-right'} />
                )}
            </button>
        </aside>
    );
}
