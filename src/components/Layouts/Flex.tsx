import React from "react";

interface Props {
    justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
    align?: "start" | "end" | "center" | "stretch" | "baseline";
    direction?: "row" | "column";
    gap?: number;
    children: React.ReactNode;
}

export default function Flex({
    justify = "center",
    align = "center",
    direction = "row",
    gap = 5,
    children,
}: Props) {
    const lookupJustify = {
        start: "flex-start",
        end: "flex-end",
        center: "center",
        between: "space-between",
        around: "space-around",
        evenly: "space-evenly",
    };

    const lookupAlign: any = {
        start: "flex-start",
        end: "flex-end",
    };

    const totalCss: React.CSSProperties = {
        width: "100%",
        display: "flex",
        justifyContent: lookupJustify[justify],
        alignItems: lookupAlign[align] || align,
        flexDirection: direction,
        gap: `${gap}px`,
    };

    return (
        <div className="flex flex-responsive" style={totalCss}>
            {children}
        </div>
    );
}
