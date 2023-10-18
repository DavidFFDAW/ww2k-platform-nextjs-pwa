import { Link } from 'react-router-dom';
import { makePrivateRoute } from '../../utilities/private.route.utility';

export function MenuLink({ to, label, icon }) {
    return (
        <Link className="flex start" style={{ width: '100%', textDecoration: 'none' }} to={makePrivateRoute(to)}>
            {icon} <label style={{ marginLeft: 10 }}>{label}</label>
        </Link>
    );
}
