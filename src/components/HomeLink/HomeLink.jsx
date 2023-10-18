import { Link } from 'react-router-dom';
import { NullableLoading } from '../Loading/LoadingComponent';

export default function HomeLink({ icon, href, text }) {
    return (
        <Link className="home-links" to={href}>
            <NullableLoading condition={Boolean(icon)}>{icon}</NullableLoading>
            <div className="block">
                <span className="link">{text}</span>
            </div>
        </Link>
    );
}
