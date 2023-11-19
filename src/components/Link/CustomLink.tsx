import Link from "next/link";
import React from "react";

interface CustomLinkProps {
    className?: string;
    href: string;
    children: React.ReactNode;
}

export default function CustomLink({
    className,
    href,
    children,
}: CustomLinkProps) {
    return (
        <Link href={href} className={className} prefetch={false}>
            {children}
        </Link>
    );
}
