import Link from "next/link";
import React from "react";

export function StatusLabelContainer({ children }) {
    return (
        <div className="flex start al-center gap-small labeled-possible-states">
            {children}
        </div>
    );
}

export default function StatusLabel({ text, name, activeLink, href }) {
    const activeClass =
        activeLink === name.toLowerCase() ? "active" : "non-active";
    return (
        <Link
            className={`possible-state-item label ${activeClass}`}
            href={href}
        >
            {text}
        </Link>
    );
}
