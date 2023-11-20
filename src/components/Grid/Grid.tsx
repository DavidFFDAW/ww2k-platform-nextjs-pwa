import React from "react";

interface Props {
    columns: number;
    rows?: number;
    gap: number;
    align?: string;
    place?: string;
    children: React.ReactNode;
}

export default function Grid({
    columns,
    gap,
    children,
    rows,
    align,
    place,
}: Props) {
    const styles: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: rows ? `repeat(${rows}, 1fr)` : "auto",
        justifyItems: align ? align : "center",
        placeItems: place ? place : "center",
        gap: `${gap}px`,
    };

    return (
        <div className="grid responsive-grid" style={styles}>
            {children}
        </div>
    );
}
