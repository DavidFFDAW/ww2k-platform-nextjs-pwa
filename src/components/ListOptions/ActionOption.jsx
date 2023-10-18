import { Link } from 'react-router-dom';
import { ColorTypes } from './Actions';
import { NullableLoading } from '../Loading/LoadingComponent';

export function ActionOption({ item, toggler, color }) {
    const type = color || ColorTypes.DEFAULT;

    return (
        <Link className={`flex start al-center gap-small action-link ${type}`} to={item.href} onClick={toggler}>
            <NullableLoading condition={item.icon}>
                <div className="icon-wrapper">
                    <item.icon />
                </div>
            </NullableLoading>
            <h4 className="action-text">{item.text}</h4>
        </Link>
    );
}
