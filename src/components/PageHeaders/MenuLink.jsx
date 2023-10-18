import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HeaderLink({ href, closeMenu, children }) {
    return (
        <li className="menu-item">
            <Link to={href} className="unlink" onClick={closeMenu}>
                {children}
            </Link>
        </li>
    );
}

export function HeaderLinkWithSubmenu({ closeMenu, item }) {
    const { submenu } = item;
    const [activeOrHidden, setActive] = useState('hidden');

    const toggleSubmenu = () => {
        setActive(prev => (prev === 'hidden' ? 'active' : 'hidden'));
    };

    return (
        <li>
            <div className="unlink pointer" onClick={toggleSubmenu}>
                {item.name}

                <ul className={`header-submenu submenu-items submenu-${activeOrHidden}`}>
                    {submenu.map((current, index) => {
                        return (
                            <HeaderLink key={index} href={current.href} closeMenu={closeMenu}>
                                {current.label}
                            </HeaderLink>
                        );
                    })}
                </ul>
            </div>
        </li>
    );
}
