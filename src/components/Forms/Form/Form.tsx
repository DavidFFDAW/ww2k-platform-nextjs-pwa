'use client';
import React from 'react'
import useForm from './useForm';

interface FormProps {
    method: "POST" | "GET" | "PUT" | "DELETE";
    action?: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    debug?: boolean;
    onSubmitCallback?: (formData: FormData) => void;
    sendHttp?: boolean;
    redirect?: string;
    refresh?: boolean;
}

export default function Form({ method, action, children, className, style, debug, onSubmitCallback, sendHttp, redirect, refresh }: FormProps) {
    const { onSubmitHook } = useForm({ debug, refresh, action, redirectRoute: redirect, method: method.toLowerCase() as "post" | "get" | "put" | "delete" });

    return (
        <form
            method={method}
            action={action}
            className={className}
            style={style}
            onSubmit={(e) => onSubmitHook({ event: e, onSubmitCallback, sendHttp })}
        >
            {children}
        </form >
    )
}
