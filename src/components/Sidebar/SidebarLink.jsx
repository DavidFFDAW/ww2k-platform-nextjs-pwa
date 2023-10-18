import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../Icon/Icon';

function SidebarLinkSubmenu({ icon, submenu, text }) {
    const [active, setActive] = useState(false);
    const activeClass = active ? 'active' : 'non-active';

    return (
        <>
            <div
                className="sidebar-link relative flex start al-center gap-small link-with-submenu"
                onClick={_ => setActive(p => !p)}
            >
                <MaterialIcon icon={icon} />
                {text}

                <div className={`sidebar-link-submenu-container ${activeClass}`}>
                    <div className="sidebar-links-container links">
                        {submenu.map((item, index) => {
                            return <SidebarLink to={item.url} text={item.name} icon={item.material} key={index} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default function SidebarLink({ id, to, icon, text, active, setActive, submenu }) {
    // if (submenu && submenu.length > 0) return <SidebarLinkSubmenu icon={icon} text={text} submenu={submenu} />;
    const isActive = active === id ? 'active' : 'non-active';
    const clickHandler = ev => {
        // const sidebar = ev.target.parentElement.parentElement.parentElement;
        // sidebar.classList.remove('shown');
        setActive(id);
    };

    return (
        <>
            <Link
                to={to}
                title={text + ' Menu Link'}
                className={`uppercase sidebar-link flex start gap-small al-center ${isActive}`}
                onClick={clickHandler}
            >
                <MaterialIcon icon={icon} />
                {text}
            </Link>
        </>
    );
}
