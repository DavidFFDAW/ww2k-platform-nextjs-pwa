import React, { useRef, useState } from 'react';
import useClickOutside from '~/hooks/useClickOutside';
import { NullableLoading } from '~/components/Loading/LoadingComponent';
import { DotsIcon } from '~/components/Icons/CommonIcons';
import { ActionOption } from './ActionOption';
import { ActionOptionButton } from './ActionOptionButtons';
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

function Container({ children }) {
    const ref = useRef(null);
    const [showOptions, setShowOptions] = useState(false);
    const toggleShowOpts = _ => setShowOptions(show => !show);

    useClickOutside(ref, _ => {
        setShowOptions(false);
    });

    return (
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
                    {children}
                </div>
            </NullableLoading>
        </div>
    );
}

export default {
    Container,
    Option: ActionOption,
    OptionButton: ActionOptionButton,
    Types: ActionTypes,
    Colors: ColorTypes,
};
