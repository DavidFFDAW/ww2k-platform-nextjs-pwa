"use client";
import Link from "next/link";
import { ITEMS_PER_PAGE } from "@/constants/config";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";
import { ConditionalLoading, NullableLoading } from "../Loading";
import { BootstrapIcon } from "../Icon/BootstrapIcon";
import { positiveOrZero } from "./pagination.service";
import PaginationLink from "./Pagination.components";

interface PaginationProps {
    page: number;
    total: number;
    itemsPerPage?: number;
}

export function Pagination({
    page,
    total,
    itemsPerPage = ITEMS_PER_PAGE,
}: PaginationProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const realPage = Number(page) || 1;
    const previousPage = realPage - 1 || 1;
    const numberOfPages = 4;

    const innerPages = [...Array(Math.ceil(total / itemsPerPage))].map(
        (_, i) => i + 1
    );
    const lastPage = innerPages.length;
    const beforePages = innerPages.slice(
        positiveOrZero(realPage - numberOfPages - 1),
        realPage - 1
    );
    const afterPages = innerPages.slice(realPage, realPage + numberOfPages);

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
                <ConditionalLoading
                    condition={realPage > 1}
                    fallback={
                        <div className="pointer pagination__item pagination-item">
                            &lt;
                        </div>
                    }
                >
                    <PaginationLink
                        text="&lt;"
                        page={previousPage}
                        onLink={(e: any) => handleRequest(e, realPage - 1 || 1)}
                    />
                </ConditionalLoading>

                {beforePages.map((page: number) => {
                    return (
                        <PaginationLink
                            text={page}
                            key={page}
                            page={page}
                            onLink={(e: any) => handleRequest(e, page)}
                        />
                    );
                })}

                <div className="pointer pagination-real-link pagination-item active">
                    {realPage}
                </div>

                {afterPages
                    .filter((i) => i !== lastPage)
                    .map((page: number) => {
                        return (
                            <PaginationLink
                                text={page}
                                key={page}
                                page={page}
                                onLink={(e: any) => handleRequest(e, page)}
                            />
                        );
                    })}

                <div className="pointer pagination-item">...</div>

                <NullableLoading condition={realPage < lastPage}>
                    <PaginationLink
                        text={lastPage}
                        page={lastPage}
                        onLink={(e: any) => handleRequest(e, lastPage)}
                    />
                </NullableLoading>

                <ConditionalLoading
                    condition={realPage < lastPage}
                    fallback={
                        <div className="pointer pagination__item pagination-item">
                            &gt;
                        </div>
                    }
                >
                    <PaginationLink
                        text="&gt;"
                        page={realPage + 1}
                        onLink={(e: any) => handleRequest(e, realPage + 1)}
                    />
                </ConditionalLoading>
            </div>
        </div>
    );
}
