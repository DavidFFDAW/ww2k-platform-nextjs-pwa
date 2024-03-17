'use client';
import React from 'react';
import useForm from './useForm';
import { NullableLoading } from '@/components/Loading';
import { AdaptativeSpinner } from '@/components/Spinner/Spinner';

interface FormProps {
    method: 'POST' | 'GET' | 'PUT' | 'DELETE';
    action?: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    debug?: boolean;
    onSubmitCallback?: (serializedDatas: any) => void;
    preParseCallback?: (serializedDatas: any) => any;
    loadingState?: boolean;
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
    loadingState,
    sendHttp,
    redirect,
    refresh,
}: FormProps) {
    const { loading, onSubmitHook, handleFormReset } = useForm({
        debug,
        refresh,
        action,
        redirectRoute: redirect,
        method: method.toLowerCase() as 'post' | 'get' | 'put' | 'delete',
    });

    return (
        <form
            method={method}
            action={action}
            className={`custom-next-app-form ${className}`}
            style={style}
            onReset={handleFormReset}
            onSubmit={e =>
                onSubmitHook({
                    event: e,
                    onSubmitCallback,
                    preParseCallback,
                    sendHttp,
                })
            }
        >
            <NullableLoading condition={Boolean(loadingState) && loading}>
                <AdaptativeSpinner />
            </NullableLoading>

            {children}
        </form>
    );
}
