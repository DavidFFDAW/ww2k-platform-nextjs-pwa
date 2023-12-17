import React from "react";

interface TableItemProps {
    width?: number;
    style?: React.CSSProperties;
    children: React.ReactNode;
    align?: "start" | "end" | "center";
    desktopOnly?: boolean;
    mobileOnly?: boolean;
}

export function TableRow({
    children,
    style,
    className,
}: {
    style?: React.CSSProperties;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={"table-row flex f1 " + (className || "a")}
            style={style}
        >
            {children}
        </div>
    );
}

export default function TableItem({
    width,
    children,
    align,
    style,
}: TableItemProps) {
    return (
        <>
            <div
                className="table-item"
                style={{
                    width: `${width}%`,
                    textAlign: align,
                    justifyContent: align,
                    ...style,
                }}
            >
                {children}
            </div>
            <div className="table-item-separator"></div>
        </>
    );
}
