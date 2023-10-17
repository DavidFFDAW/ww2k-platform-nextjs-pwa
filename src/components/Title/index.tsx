import React from 'react';
// import { MaterialIcon } from '../Icon/Icon';

interface TitleProps {
    title: string;
    children?: React.ReactNode;
}

function TitleWithChildren({ title, children }: TitleProps) {
    return (
        <div className="title-container flex between al-center">
            <div className="flex start al-center gap">
                <div>
                    {/* <MaterialIcon icon={'arrow_back_ios'} /> */}
                </div>
                <h2 className="page-title-custom dreadnotus">{title}</h2>
            </div>
            {children}
        </div>
    );
}

export default function Title({ title, children }: TitleProps) {
    if (children)
        return (
            <TitleWithChildren title={title}>
                {children}
            </TitleWithChildren>
        );

    return (
        <div className="title-container flex start al-center gap">
            <div>
                {/* <MaterialIcon icon={'arrow_back_ios'} /> */}
            </div>
            <h2 className="page-title-custom dreadnotus">{title}</h2>
        </div>
    );
}