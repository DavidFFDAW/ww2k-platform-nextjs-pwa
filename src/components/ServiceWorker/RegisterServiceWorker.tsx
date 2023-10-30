'use client';
import { ChildrenInterface } from '@/shared/models';
import React from 'react'
import useServiceWorker from './useServiceWorker';

export default function RegisterServiceWorker({ children }: ChildrenInterface) {
    const _ = useServiceWorker();

    return (
        <div className='service-worker-registration'>
            {children}
        </div>
    )
}
