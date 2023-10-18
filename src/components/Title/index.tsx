import React from 'react';
import { BootstrapIcon } from '../Icon/BootstrapIcon';
// import { MaterialIcon } from '../Icon/Icon';

interface TitleProps {
    title: string;
    icon?: string;
    children?: React.ReactNode;
}

function TitleWithChildren({ title, icon, children }: TitleProps) {
    return (
        <div className="title-container flex between acenter">
            <div className="flex start acenter gap-small">
                {icon ?
                    <div>
                        <BootstrapIcon icon={icon} />
                    </div>
                    : null}
                <h2 className="page-title-custom dreadnotus">{title}</h2>
            </div>
            {children}
        </div>
    );
}

export default function Title({ title, icon, children }: TitleProps) {
    if (children)
        return (
            <TitleWithChildren title={title}>
                {children}
            </TitleWithChildren>
        );

    return (
        <div className="title-container flex start acenter gap-small">
            {icon ?
                <div>
                    <BootstrapIcon icon={icon} />
                </div>
                : null}
            <h2 className="page-title-custom dreadnotus">{title}</h2>
        </div>
    );
}