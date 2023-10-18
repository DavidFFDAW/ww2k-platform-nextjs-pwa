import React from 'react';
import { AdminMenuContent } from './AdminMenu';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';

export function AdminHeaders() {
    const [showMenu, setShowMenu] = React.useState(false);
    const menuClass = showMenu ? 'unbutton menu active' : 'unbutton menu';

    const setMenu = () => {
        setShowMenu(previous => !previous);
    };

    const closeMenu = _ => {
        if (Boolean(showMenu)) {
            setShowMenu(false);
        }
    };

    const navigate = useNavigate();

    return (
        <>
            <header className="sticky-header">
                <div className="admin-header flex between al-center gap">
                    <button
                        className="unbutton"
                        style={{ color: '#fff' }}
                        role="button"
                        type="button"
                        onClick={_ => navigate(-1)}
                    >
                        ←
                    </button>
                    <Link className="block" to={'/admin'}>
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
