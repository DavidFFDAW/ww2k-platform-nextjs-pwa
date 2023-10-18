import React from 'react';
import { MaterialIcon } from '../Icon/Icon';
import { useNavigate } from 'react-router-dom';

function TitleWithChildren({ title, navigate, children }) {
    return (
        <div className="title-container flex between al-center">
            <div className="flex start al-center gap">
                <div onClick={_ => navigate(-1)}>
                    <MaterialIcon icon={'arrow_back_ios'} />
                </div>
                <h2 className="page-title-custom dreadnotus">{title}</h2>
            </div>
            {children}
        </div>
    );
}

export default function Title({ title, children }) {
    const navigate = useNavigate();
    if (children)
        return (
            <TitleWithChildren navigate={navigate} title={title}>
                {children}
            </TitleWithChildren>
        );

    return (
        <div className="title-container flex start al-center gap">
            <div onClick={_ => navigate(-1)}>
                <MaterialIcon icon={'arrow_back_ios'} />
            </div>
            <h2 className="page-title-custom dreadnotus">{title}</h2>
        </div>
    );
}
