import React from 'react';

export default function AppButton({
    text,
    onClickEvent,
    className,
    type = 'button',
}) {
    const defaultCss = 'btn app-btn';
    const css =
        Boolean(className) && className.length > 0
            ? `${defaultCss} ${className}`
            : defaultCss;

    return (
        <button type={type} onClick={onClickEvent} className={css}>
            {text}
        </button>
    );
}
