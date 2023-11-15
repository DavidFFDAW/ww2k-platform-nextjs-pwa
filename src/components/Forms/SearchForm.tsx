"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface SearchFormProps {
    url: string;
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

export default function SearchForm({ url, className, style, children }: SearchFormProps) {
    const router = useRouter();
    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const query = new URLSearchParams(formData as any).entries();
        const nonEmptyParams = Array.from(query)
            .filter(([_, value]) => value !== "")
            .map(([key, value]) => `${key}=${value}`)
            .join("&");

        console.log(nonEmptyParams);


        router.push(url + "?" + nonEmptyParams);
    };

    return (
        <form
            method="GET"
            className={className}
            style={style}
            onSubmit={handlerSubmit}
        >
            {children}
        </form>
    );
}
