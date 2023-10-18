import React, { useRef, useState } from 'react';
import { NullableLoading } from '../Loading/LoadingComponent';
import { DotsIcon } from '../Icons/CommonIcons';
import { ActionOptionButton } from './ActionOptionButtons';
import { ActionOption } from './ActionOption';
import { DeleteAction } from './DeleteAction';
import useClickOutside from '~/hooks/useClickOutside';
import './actions.css';

export const ActionTypes = {
    BUTTON: 'button',
    DEFAULT: 'default',
    LINK: 'link',
};

export const ColorTypes = {
    SUCCESS: 'success-action',
    DEFAULT: 'default-action',
    DELETE: 'delete-action',
    WARNING: 'warning-action',
    INFO: 'info-action',
    DARK: 'dark-action',
};

export default function Actions({ deleteText, deleteEndpoint, options, stateUpdaterCallback }) {
    const ref = useRef(null);
    const [showOptions, setShowOptions] = useState(false);
    const toggleShowOpts = _ => setShowOptions(show => !show);
    const hasOptions = options && options.length > 0;
    const hasDelete = Boolean(deleteEndpoint) && deleteEndpoint.length > 0;

    useClickOutside(ref, _ => {
        setShowOptions(false);
    });

    return (
        <NullableLoading condition={hasOptions}>
            <div className="actions-option-group relative" ref={ref}>
                <button
                    className={`three-dots-actions ${showOptions ? 'active' : 'normal'}`}
                    role="button"
                    aria-label="Open actions list"
                    type="button"
                    onClick={toggleShowOpts}
                >
                    <DotsIcon />
                </button>
                <NullableLoading condition={showOptions}>
                    <div className="actions-group-actions-list animate__animated animate__fadeIn animate__faster">
                        {options.map((item, inx) => {
                            if (item.type && item.type.trim().toLowerCase() === ActionTypes.BUTTON) {
                                return (
                                    <ActionOptionButton color={item.color} key={inx} item={item} toggler={toggleShowOpts} />
                                );
                            }
                            return <ActionOption color={item.color} key={inx} item={item} toggler={toggleShowOpts} />;
                        })}

                        <NullableLoading condition={hasDelete}>
                            <DeleteAction
                                text={deleteText}
                                endpoint={deleteEndpoint}
                                toggler={toggleShowOpts}
                                stateUpdaterCallback={stateUpdaterCallback}
                            />
                        </NullableLoading>
                    </div>
                </NullableLoading>
            </div>
        </NullableLoading>
    );
}
