import Spinner from '@/components/Spinner/Spinner';
import React, { Suspense } from 'react';
import TwitterList from './TwitterList';

export default function TwitterPage() {
    return (<>
        <Suspense fallback={<Spinner />}>
            <TwitterList />
        </Suspense>
    </>);
}
