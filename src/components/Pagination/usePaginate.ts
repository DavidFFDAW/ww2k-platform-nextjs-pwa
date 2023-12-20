"use client";
import { FormEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function usePaginate() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

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

    return {
        handleRequest,
    };
}
