'use client';
import React from 'react';
import { AdminMenuContent } from './AdminMenu';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './header.css';

export function AdminHeaders() {
    const router = useRouter();
    const [showMenu, setShowMenu] = React.useState<boolean>(false);
    const menuClass = showMenu ? 'unbutton menu active' : 'unbutton menu';

    const setMenu = () => {
        setShowMenu(previous => !previous);
    };

    const closeMenu = () => {
        if (Boolean(showMenu)) {
            setShowMenu(false);
        }
    };

    return (
        <>
            <header className="sticky-header">
                <div className="admin-header flex between al-center gap">
                    <button
                        className="unbutton"
                        style={{ color: '#fff' }}
                        role="button"
                        type="button"
                        onClick={() => router.back()}
                    >
                        ←
                    </button>
                    <Link className="block" href={'/admin'}>
                        <h4 className="admin-header-title">Admin</h4>
                    </Link>
                    <button className={menuClass} onClick={setMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </div>
                {showMenu && (
                    <div className="menu-content flex end al-center gap-smaller">
                        <AdminMenuContent closeMenu={closeMenu} />
                    </div>
                )}
            </header>
        </>
    );
}
