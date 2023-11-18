"use client";
import React from "react";
import useHttpForm from "./useHttpForm";

interface HttpFormProps {
    action: string;
    responseKey?: string;
    method: "POST" | "GET" | "PUT" | "DELETE";
    dispatchState: React.Dispatch<any>;
    children: React.ReactNode;
    className?: string;
}

export default function HttpForm({
    action,
    method,
    className,
    responseKey = "data",
    dispatchState,
    children,
}: HttpFormProps) {
    const { onSubmitHook } = useHttpForm({
        href: action,
        method: method.toLowerCase() as "post" | "get" | "put" | "delete",
        dispatch: dispatchState,
        responseKey,
    });

    return (
        <form
            method={method}
            action={action}
            className={className}
            onSubmit={onSubmitHook}
        >
            {children}
        </form>
    );
}
