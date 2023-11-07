import React from "react";
import Link from "next/link";

export function StatusLabelContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex responsive-wrap wrap start al-center gap-small labeled-possible-states">
            {children}
        </div>
    );
}

interface StatusLabelProps {
    text: string;
    name: string;
    activeLink: string | null;
    href: string;
}

export default function StatusLabel({ text, name, activeLink, href }: StatusLabelProps) {
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
