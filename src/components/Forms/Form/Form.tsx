'use client';
import React from 'react'
import useForm from './useForm';

interface FormProps {
    method: "POST" | "GET";
    action?: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    debug?: boolean;
    onSubmitCallback?: (formData: FormData) => void;
    sendHttp?: boolean;
    redirect?: string;
}

export default function Form({ method, action, children, className, style, debug, onSubmitCallback, sendHttp, redirect }: FormProps) {
    const { onSubmitHook } = useForm({ action, redirectRoute: redirect });


    return (
        <form
            method={method}
            action={action}
            className={className}
            style={style}
            onSubmit={(e) => onSubmitHook({ event: e, debug, onSubmitCallback, sendHttp })}
        >
            {children}
        </form >
    )
}
