import React from "react";
import Link from "next/link";

interface PaginationLinkProps {
    text: string | number;
    page: number;
    onLink: (e: any) => void;
}

export default function PaginationLink({
    text,
    page,
    onLink,
}: PaginationLinkProps) {
    return (
        <Link
            href={`?page=${page}`}
            className="pagination-item pagination__item"
            onClick={onLink}
        >
            {text}
        </Link>
    );
}