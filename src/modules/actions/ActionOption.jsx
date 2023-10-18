import { Link } from 'react-router-dom';
import { ColorTypes } from './Actions';
import { NullableLoading } from '~/components/Loading/LoadingComponent';

export function ActionOption({ toHref, text, icon, color }) {
    const type = color || ColorTypes.DEFAULT;

    return (
        <Link className={`flex start al-center gap-small action-link ${type}`} to={toHref}>
            <NullableLoading condition={icon}>
                <div className="icon-wrapper">
                    <icon />
                </div>
            </NullableLoading>
            <h4 className="action-text">{text}</h4>
        </Link>
    );
}
