"use client";
import React from "react";
import useForm from "./useForm";

interface FormProps {
    method: "POST" | "GET" | "PUT" | "DELETE";
    action?: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    debug?: boolean;
    onSubmitCallback?: (serializedDatas: any) => void;
    preParseCallback?: (serializedDatas: any) => any;
    sendHttp?: boolean;
    redirect?: string;
    refresh?: boolean;
}

export default function Form({
    method,
    action,
    children,
    className,
    style,
    debug,
    onSubmitCallback,
    preParseCallback,
    sendHttp,
    redirect,
    refresh,
}: FormProps) {
    const { onSubmitHook, handleFormReset } = useForm({
        debug,
        refresh,
        action,
        redirectRoute: redirect,
        method: method.toLowerCase() as "post" | "get" | "put" | "delete",
    });

    return (
        <form
            method={method}
            action={action}
            className={className}
            style={style}
            onReset={handleFormReset}
            onSubmit={(e) =>
                onSubmitHook({
                    event: e,
                    onSubmitCallback,
                    preParseCallback,
                    sendHttp,
                })
            }
        >
            {children}
        </form>
    );
}
