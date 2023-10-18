import { Link } from 'react-router-dom';

export default function CreateButton({ endpoint }) {
    return (
        <Link to={`/admin/${endpoint}`} className="create-new-button">
            &#43;
        </Link>
    );
}
