import React from "react";

interface Props {
    columns: number;
    rows?: number;
    gap: number;
    align?: string;
    place?: string;
    min?: number;
    responsive?: boolean;
    children: React.ReactNode;
}

export default function Grid({
    columns,
    gap,
    children,
    rows,
    align,
    min,
    place,
    responsive = false,
}: Props) {
    const styles: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: min
            ? `repeat(auto-fit, minmax(${min}px, 1fr))`
            : `repeat(${columns}, 1fr)`,
        gridTemplateRows: rows ? `repeat(${rows}, 1fr)` : "auto",
        justifyItems: align ? align : "center",
        placeItems: place ? place : "center",
        gap: `${gap}px`,
    };

    return (
        <div
            className={
                "grid custom-component-grid responsive-grid-2 " +
                (responsive ? "grid-responsive" : "not-responsive-grid")
            }
            style={styles}
        >
            {children}
        </div>
    );
}
