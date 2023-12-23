import React from "react";
import { BootstrapIcon } from "../Icon/BootstrapIcon";
import GoBackButton from "../Links/GoBackButton";

interface TitleProps {
    title: string;
    icon?: string;
    children?: React.ReactNode;
}

function TitleWithChildren({ title, icon, children }: TitleProps) {
    return (
        <div className="title-container flex between acenter">
            <GoBackButton />
            <div className="flex start acenter gap-small">
                {icon ? (
                    <div>
                        <BootstrapIcon icon={icon} />
                    </div>
                ) : null}
                <h2 className="page-title-custom dreadnotus">{title}</h2>
            </div>
            {children}
        </div>
    );
}

export default function Title({ title, icon, children }: TitleProps) {
    if (children)
        return (
            <TitleWithChildren title={title} icon={icon}>
                {children}
            </TitleWithChildren>
        );

    return (
        <div className="title-container flex start acenter gap-small">
            <GoBackButton />
            {icon ? (
                <div>
                    <BootstrapIcon icon={icon} />
                </div>
            ) : null}
            <h1 className="page-title-custom dreadnotus">{title}</h1>
        </div>
    );
}
