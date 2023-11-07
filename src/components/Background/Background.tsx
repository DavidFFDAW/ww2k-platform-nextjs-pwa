import React from 'react';

interface Props {
    custom?: string;
    children?: React.ReactNode;
};

export function PageBackground({ custom, children }: Props) {
    const className = Boolean(custom) ? `custom-totalpage-wallpaper ${custom}` : 'custom-totalpage-wallpaper default';

    return (
        <>
            <div className={className}>{children}</div>
        </>
    );
}
