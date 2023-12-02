import Spinner from "@/components/Spinner/Spinner";
import Title from "@/components/Title";
import React, { Suspense } from "react";
import BlogPublicList from "./BlogPublicList";

export const revalidate = 0;

export default function BlogPublicListPage() {
    return (
        <>
            <Title title="Blog" icon="newspaper" />;
            <Suspense fallback={<Spinner />}>
                <BlogPublicList />
            </Suspense>
        </>
    );
}
