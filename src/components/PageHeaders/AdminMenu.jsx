import { Link } from 'react-router-dom';
import { useAuth } from '~/hooks/useAuth';
import HeaderLink, { HeaderLinkWithSubmenu } from './MenuLink';
import { UpsertToggle } from '../Forms/FormInputs';
import { useEffect, useState } from 'react';
import { HeaderMenu } from '~/constants/Menus';

const themes = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

export function AdminMenuContent({ closeMenu }) {
    const { logOut } = useAuth();
    const { changeColorThemeProp, colorTheme } = useAuth();
    const [toggleState, setToggleState] = useState(false);

    const handleLogOut = () => {
        closeMenu();
        logOut();
    };

    useEffect(() => {
        setToggleState(colorTheme === themes.DARK);
    }, [colorTheme]);

    const handleColorThemeSwitch = () => {
        const body = document.body;
        const theme = body.classList.contains(themes.LIGHT) ? themes.DARK : themes.LIGHT;
        body.classList.toggle(themes.DARK);
        changeColorThemeProp(theme);
        closeMenu();
    };

    return (
        <>
            <ul className="list-menu">
                <li>
                    <Link to={'/'} className="super-menu-item" onClick={closeMenu}>
                        Público
                    </Link>
                    <ul className="submenu">
                        {HeaderMenu.public.map((item, indx) => {
                            return (
                                <HeaderLink key={indx} href={item.url} closeMenu={closeMenu}>
                                    {item.name}
                                </HeaderLink>
                            );
                        })}
                    </ul>
                </li>
                <li>
                    <Link to={'/admin'} className="super-menu-item" onClick={closeMenu}>
                        Administrador
                    </Link>
                    <ul className="submenu">
                        {HeaderMenu.admin.map((item, indx) => {
                            if (item.submenu) {
                                return (
                                    <HeaderLinkWithSubmenu
                                        key={indx}
                                        href={item.url}
                                        closeMenu={closeMenu}
                                        item={item}
                                    />
                                );
                            }

                            return (
                                <HeaderLink key={indx} href={item.url} closeMenu={closeMenu}>
                                    {item.name}
                                </HeaderLink>
                            );
                        })}
                    </ul>
                </li>
                <li style={{ marginTop: 20 }} className="logout">
                    <a onClick={handleLogOut} className="logout-link unlink">
                        Cerrar sesión
                    </a>
                </li>
                {/* <li style={{ marginTop: 20 }} className="logout">
                    <div className="flex end al-start gap">
                        <p>Claro</p>
                        <div>
                            <UpsertToggle label={''} toggleCallback={handleColorThemeSwitch} checked={toggleState} />
                        </div>
                        <p>Oscuro</p>
                    </div>
                </li> */}
            </ul>
        </>
    );
}
