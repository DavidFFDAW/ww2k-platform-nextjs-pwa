import React from 'react';

export function StatusLabelContainer({ children }) {
    return <div className="flex start al-center gap-small labeled-possible-states">{children}</div>;
}

export default function StatusLabel({ text, name, activeLink, onClick }) {
    const activeClass = activeLink === name.toLowerCase() ? 'active' : 'non-active';
    return (
        <div className={`possible-state-item label ${activeClass}`} onClick={onClick}>
            {text}
        </div>
    );
}
