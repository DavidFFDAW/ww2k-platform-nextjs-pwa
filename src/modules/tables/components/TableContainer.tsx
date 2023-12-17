import React from "react";
import "../css/tables.css";

interface TableContainerProps {
    gap?: number;
    children: React.ReactNode;
}

export default function TableContainer({
    gap = 5,
    children,
}: TableContainerProps) {
    return (
        <div
            className="w1 table-module-container"
            style={{
                gap: gap,
            }}
        >
            {children}
        </div>
    );
}
