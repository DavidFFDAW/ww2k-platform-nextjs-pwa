import { ColorTypes } from './Actions';
import { NullableLoading } from '../Loading/LoadingComponent';

export function ActionOptionButton({ item, toggler, color }) {
    const executeCallback = _ => {
        if (item.callback) {
            item.callback();
        }
        toggler();
    };

    const type = color || ColorTypes.DEFAULT;

    return (
        <div className={`flex start al-center gap-small action-link ${type}`} onClick={executeCallback}>
            <NullableLoading condition={item.icon}>
                <div className="icon-wrapper">
                    <item.icon />
                </div>
            </NullableLoading>
            <h4 className="action-text">{item.text}</h4>
        </div>
    );
}
