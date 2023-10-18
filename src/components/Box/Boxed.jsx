import React from 'react';

export function Boxed({ title, children, w }) {
    const width = w ? Number(w) : 90;
    return (
        <div className="boxed space-down" style={{ width: `${width}%` }}>
            {title && <h2 className="box-title space-down">{title}</h2>}
            {children}
        </div>
    );
}
