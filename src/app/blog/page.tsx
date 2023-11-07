import Spinner from '@/components/Spinner/Spinner';
import Title from '@/components/Title';
import React, { Suspense } from 'react';
import BlogPublicList from './BlogPublicList';

export default function page() {
    return (<>
        <Title title="Blog" icon="newspaper" />;

        <Suspense fallback={<Spinner />}>
            <BlogPublicList />
        </Suspense>
    </>
    );
}
