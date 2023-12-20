"use client";
import React from "react";
import { NullableLoading } from "../Loading";
import usePaginate from "./usePaginate";
import PaginationLink from "./Pagination.components";

interface SimplePaginationProps {
    page: number;
    total: number;
}

export default function SimplePagination({
    page,
    total,
}: SimplePaginationProps) {
    const { handleRequest } = usePaginate();

    return (
        <section className="w1 simple-pagination pagination-section">
            <div
                className="w1 flex center acenter gap pagination"
                style={{ width: "100%" }}
            >
                <NullableLoading condition={page > 1}>
                    <PaginationLink
                        text="&lt;"
                        page={page - 1}
                        onLink={(e: any) => handleRequest(e, page - 1)}
                    />
                </NullableLoading>

                <NullableLoading condition={page < total}>
                    <PaginationLink
                        text="&gt;"
                        page={page + 1}
                        onLink={(e: any) => handleRequest(e, page + 1)}
                    />
                </NullableLoading>
            </div>
        </section>
    );
}
