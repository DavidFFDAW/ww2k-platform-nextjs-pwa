import React from "react";

interface TableItemProps {
    width?: number;
    children: React.ReactNode;
    align?: "left" | "right" | "center";
}

export function TableRow({ children }: { children: React.ReactNode }) {
    return <div className="table-row flex f1">{children}</div>;
}

export default function TableItem({ width, children, align }: TableItemProps) {
    return (
        <>
            <div className="table-item" style={{ width: `${width}%`, textAlign: align }}>
                {children}
            </div>
            <div className="table-item-separator"></div>
        </>
    );
}
