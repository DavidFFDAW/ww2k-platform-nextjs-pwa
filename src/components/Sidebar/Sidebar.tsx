'use client';
import React, { useState } from 'react';
import Image from '../Image/Image';
import Link from 'next/link';
import SidebarLink, { SidebarSubmit } from './SidebarLink';
import { BootstrapIcon } from '../Icon/BootstrapIcon';
import { logout } from '@/actions/auth.actions';

export default function Sidebar() {
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
                    <SidebarLink icon="list-ul" to={'/admin/wrestlers'} text="Wrestlers" />
                    <SidebarLink icon="newspaper" to={'/admin/blog'} text="Blog" />
                    <SidebarLink icon="twitter-x" to={'/admin/wrestlers'} text="Twitter" />
                    <SidebarLink icon="people-fill" to={'/admin/wrestlers'} text="Teams" />
                    <SidebarLink icon="trophy" to={'/admin/wrestlers'} text="Champions" />
                    <SidebarLink icon="arrows-move" to={'/admin/wrestlers'} text="Draft" />
                    <form action={logout}>
                        <SidebarSubmit icon="signpost" text="Cerrar sesión" />
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
