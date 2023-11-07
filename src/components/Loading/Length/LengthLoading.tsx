import { ComponentSpinner } from '@/components/Spinner/Spinner';
import React from 'react'

interface LengthLoadingProps {
    list: any[];
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

export function LengthLoading({ list, children, fallback }: LengthLoadingProps) {
    const fallbackComponent = fallback || <ComponentSpinner />;
    return (
        <>
            {list.length > 0 ? (
                children
            ) : (
                fallbackComponent
            )}
        </>
    )
}