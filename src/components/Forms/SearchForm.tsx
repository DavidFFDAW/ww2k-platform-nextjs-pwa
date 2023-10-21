"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface SearchFormProps {
    url: string;
    children: React.ReactNode;
}

export default function SearchForm({ url, children }: SearchFormProps) {
    const router = useRouter();
    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const query = new URLSearchParams(formData as any).entries();
        const nonEmptyParams = Array.from(query)
            .filter(([_, value]) => value !== "")
            .map(([key, value]) => `${key}=${value}`)
            .join("&");

        router.push(url + "?" + nonEmptyParams);
    };

    return (
        <form
            method="GET"
            className="wrestlers-filters-list-container"
            onSubmit={handlerSubmit}
        >
            {children}
        </form>
    );
}
