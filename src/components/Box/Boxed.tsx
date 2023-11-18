import React from "react";

interface BoxedProps {
    title?: string;
    children: React.ReactNode;
    w?: string;
    className?: string;
}

export function Boxed({ title, children, w, className }: BoxedProps) {
    const width = w ? Number(w) : 90;
    const classes = className
        ? `boxed space-down ${className}`
        : "boxed space-down";
    return (
        <div className={classes} style={{ width: `${width}%` }}>
            {title && <h2 className="box-title space-down">{title}</h2>}
            {children}
        </div>
    );
}
