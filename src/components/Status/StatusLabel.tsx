import React from "react";
import Link from "next/link";

export function StatusLabelContainer({ children, fixed = false }: { children: React.ReactNode, fixed?: boolean }) {
    return (
        <div className="flex responsive-wrap wrap start al-center gap-small labeled-possible-states" style={{
            position: fixed ? 'sticky' : 'relative',
            top: fixed ? 10 : 'auto',
            left: fixed ? 0 : 'auto',
            zIndex: fixed ? 100 : 0,
            background: fixed ? 'var(--page-background)' : 'transparent',
            padding: fixed ? '10px 5px' : 0,
            transition: 'all .2s ease'
        }}>
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
