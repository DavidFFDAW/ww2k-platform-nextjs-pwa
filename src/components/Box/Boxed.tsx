import React from "react";

interface BoxedProps {
    title?: string;
    children: React.ReactNode;
    w?: string;
}

export function Boxed({ title, children, w }: BoxedProps) {
    const width = w ? Number(w) : 90;
    return (
        <div className="boxed space-down" style={{ width: `${width}%` }}>
            {title && <h2 className="box-title space-down">{title}</h2>}
            {children}
        </div>
    );
}
