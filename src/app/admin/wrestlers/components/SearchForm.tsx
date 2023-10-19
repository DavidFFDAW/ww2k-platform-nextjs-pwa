"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function SearchForm() {
    const router = useRouter();

    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const query = new URLSearchParams(formData as any).toString();
        console.log(query);

        // router.push("/admin/wrestlers?" + query);
    };

    return (
        <form
            action=""
            method="GET"
            className="flex start gap acenter"
            onSubmit={handlerSubmit}
        >
            <input type="text" name="fname" />
            <input type="text" name="fsex" />
            <input type="text" name="status" />
            <input type="submit" value="Buscar" />
        </form>
    );
}
