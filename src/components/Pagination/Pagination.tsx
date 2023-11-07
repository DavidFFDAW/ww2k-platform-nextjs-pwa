"use client";
import Link from "next/link";
import { ITEMS_PER_PAGE } from "@/constants/config";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";
import { NullableLoading } from "../Loading";

interface PaginationProps {
    page: number;
    total: number;
}

export function Pagination({ page, total }: PaginationProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const realPage = Number(page) || 1;
    const previousPage = realPage - 1 || 1;

    const innerPages = [...Array(Math.ceil(total / ITEMS_PER_PAGE))].map(
        (_, i) => i + 1
    );
    const lastPage = innerPages.length;

    const handleRequest = (e: FormEvent, page: number) => {
        e.preventDefault();
        const params = searchParams.entries();
        const nonPageParams = Array.from(params).reduce(
            (acc: any, [key, value]: any) => {
                if (key !== "page") {
                    acc += `${key}=${value}&`;
                }
                return acc;
            },
            ""
        );

        const query = Boolean(nonPageParams)
            ? `?${nonPageParams}page=${page}`
            : `?page=${page}`;

        router.push(pathname + query);
    };

    return (
        <div className="flex center acenter">
            <div className="w1 pagination flex center acenter">
                <NullableLoading condition={realPage > 1}>
                    <Link
                        href={`?page=${previousPage}`}
                        className="pagination-item pagination__item"
                        onClick={(e) => handleRequest(e, realPage - 1 || 1)}
                    >
                        &lt;
                    </Link>
                </NullableLoading>

                {innerPages
                    .filter((page) => page < lastPage)
                    .slice(realPage - 1, realPage + 4)
                    .map((i: number) => {
                        const pageNumber = i;
                        return (
                            <Link
                                href={`&page=${pageNumber}`}
                                className={`pagination-real-link pagination-item ${realPage === pageNumber
                                        ? "active"
                                        : "non-active"
                                    }`}
                                key={pageNumber}
                                onClick={(e) => handleRequest(e, pageNumber)}
                            >
                                {pageNumber}
                            </Link>
                        );
                    })}

                <NullableLoading condition={realPage < lastPage}>
                    <div className="pagination-item">...</div>
                    <Link
                        href={`?page=${lastPage}`}
                        className="pagination-item"
                        onClick={(e) => handleRequest(e, lastPage)}
                    >
                        {lastPage}
                    </Link>
                </NullableLoading>

                <NullableLoading condition={realPage < lastPage}>
                    <Link
                        href={`?page=${realPage + 1}`}
                        className="pagination-item"
                        onClick={(e) => handleRequest(e, realPage + 1)}
                    >
                        &gt;
                    </Link>
                </NullableLoading>
            </div>
        </div>
    );
}
