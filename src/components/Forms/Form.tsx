'use client';
import React from 'react'

interface FormProps {
    method: "POST" | "GET";
    action?: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    debug?: boolean;
    onSubmitCallback?: (formData: FormData) => void;
}

export default function Form({ method, action, children, className, style, debug, onSubmitCallback }: FormProps) {
    return (
        <form
            method={method}
            action={action}
            className={className}
            style={style}
            onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                if (debug) console.log('Form data:', JSON.stringify(Object.fromEntries(formData)));
                if (onSubmitCallback) onSubmitCallback(formData);
            }}
        >
            {children}
        </form>
    )
}
