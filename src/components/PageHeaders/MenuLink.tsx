'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface HeaderLinkProps {
    href: string;
    closeMenu: () => void;
    children: React.ReactNode;
}

export default function HeaderLink({ href, closeMenu, children }: HeaderLinkProps) {
    return (
        <li className="menu-item">
            <Link href={href} className="unlink" onClick={closeMenu}>
                {children}
            </Link>
        </li>
    );
}

interface HeaderLinkWithSubmenuProps {
    closeMenu: () => void;
    item: {
        name: string;
        submenu: {
            href: string;
            label: string;
        }[];
    };
}

export function HeaderLinkWithSubmenu({ closeMenu, item }: HeaderLinkWithSubmenuProps) {
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
