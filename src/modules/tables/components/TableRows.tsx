import React from "react";

interface TableItemProps {
    width?: number;
    children: React.ReactNode;
}

export function TableRow({ children }: { children: React.ReactNode }) {
    return <div className="table-row flex f1">{children}</div>;
}

export default function TableItem({ width, children }: TableItemProps) {
    return (
        <>
            <div className="table-item" style={{ width: `${width}%` }}>
                {children}
            </div>
            <div className="table-item-separator"></div>
        </>
    );
}
