"use client";
import { ITEMS_PER_PAGE } from "@/constants/config";
import { ConditionalLoading, NullableLoading } from "../Loading";
import { positiveOrZero } from "./pagination.service";
import PaginationLink from "./Pagination.components";
import usePaginate from "./usePaginate";

interface PaginationProps {
    page: number;
    total: number;
    numberOfPages?: number;
    itemsPerPage?: number;
}

export function Pagination({
    page,
    total,
    numberOfPages = 4,
    itemsPerPage = ITEMS_PER_PAGE,
}: PaginationProps) {
    const { handleRequest } = usePaginate();

    const realPage = Number(page) || 1;
    const previousPage = realPage - 1 || 1;

    const innerPages = [...Array(Math.ceil(total / itemsPerPage))].map(
        (_, i) => i + 1
    );
    const lastPage = innerPages.length;
    const beforePages = innerPages.slice(
        positiveOrZero(realPage - numberOfPages - 1),
        realPage - 1
    );
    const afterPages = innerPages.slice(realPage, realPage + numberOfPages);

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

                <NullableLoading condition={realPage > 1}>
                    <PaginationLink
                        text={1}
                        page={1}
                        onLink={(e: any) => handleRequest(e, 1)}
                    />
                    <div className="pointer pagination-item">...</div>
                </NullableLoading>

                {beforePages
                    .filter((i) => i !== 1)
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

                <NullableLoading condition={realPage < lastPage}>
                    <div className="pointer pagination-item">...</div>
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
