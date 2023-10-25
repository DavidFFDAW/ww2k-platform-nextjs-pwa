import React from "react";
import "../css/tables.css";

interface TableContainerProps {
    children: React.ReactNode;
}

export default function TableContainer({ children }: TableContainerProps) {
    return <div className="w1 table-module-container">{children}</div>;
}
