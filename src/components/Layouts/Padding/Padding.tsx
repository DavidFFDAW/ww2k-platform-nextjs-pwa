import React from "react";

interface Props {
    sides?: number;
    updown?: number;
    children: React.ReactNode;
}

export default function Padding({ sides = 0, updown = 0, children }: Props) {
    return (
        <div className="padding" style={{ padding: `${updown}px ${sides}px` }}>
            {children}
        </div>
    );
}
