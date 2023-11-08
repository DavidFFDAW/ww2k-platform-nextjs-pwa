import React from 'react'
import { prisma } from '@/db/conn'
import { redirect } from 'next/navigation';
import UpdateForm from './UpdateForm';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

function getBlogPost(id: number) {
    return prisma.report.findFirst({
        where: {
            id: id,
        },
        include: {
            ReportComments: true,
        },
    });
}

export default async function BlogUpdatePage({ params }: { params: { id: string } }) {
    if (!params.id) redirect('/admin/blog');
    const blogPost = await getBlogPost(Number(params.id));
    if (!blogPost) redirect('/admin/blog');

    return (
        <>
            <UpdateForm post={blogPost} />
        </>
    );
}
