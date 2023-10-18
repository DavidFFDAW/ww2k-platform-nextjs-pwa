import React, { useState } from 'react';
import { HeaderMenu } from '~/constants/Menus';
import Image from '../Image/Image';
import SidebarLink from './SidebarLink';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../Icon/Icon';
import './sidebar.css';

export default function Sidebar() {
    const [sidebarData, setSidebarData] = useState({
        activeLink: '',
        showSidebar: true,
    });

    const toggleSidebar = () => {
        setSidebarData(p => ({ ...p, showSidebar: !p.showSidebar }));
    };

    const setActive = id => {
        setSidebarData(p => ({ ...p, activeLink: id }));
    };

    const showSidebar = sidebarData.showSidebar ? 'shown' : '';

    return (
        <aside className={`sidebar ${showSidebar}`} id="sidebear">
            <button type="button" role="button" className="btn close responsive" onClick={toggleSidebar}></button>

            <div className="flex center sidebar-image-container">
                <Link to={'/admin/dashboard'} title="Image Dashboard Link">
                    <Image src={'/icons/icon-512x512.png'} width={128} height={128} className="sidebar-image-logo" />
                </Link>
            </div>

            <div className="flex center links-container-big">
                <div className="sidebar-links-container links">
                    {HeaderMenu.admin.map(item => {
                        if (item.showOnSidebar) {
                            return (
                                <SidebarLink
                                    id={item.key}
                                    active={sidebarData.activeLink}
                                    setActive={setActive}
                                    icon={item.material}
                                    to={item.url}
                                    key={item.key}
                                    text={item.name}
                                />
                            );
                        }
                    })}
                </div>
            </div>

            <button className="btn-sidebar btn-open-sidebar" onClick={toggleSidebar}>
                {sidebarData.showSidebar ? (
                    <MaterialIcon icon={'chevron_left'} />
                ) : (
                    <MaterialIcon icon={'chevron_right'} />
                )}
            </button>
        </aside>
    );
}
