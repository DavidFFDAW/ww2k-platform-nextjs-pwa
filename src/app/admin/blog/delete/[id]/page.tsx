import { prisma } from '@/db/conn';
import { redirect } from 'next/navigation';
import React from 'react';

interface DeleteProps {
    params: {
        id: string;
    };
}

async function deleteBlogPostById(id: number) {
    return await prisma.report.delete({
        where: {
            id,
        },
    });
}

export default async function BlogPostDeletePage({ params }: DeleteProps) {
    const idToDelete = Number(params.id);

    if (!idToDelete) return redirect('/admin/blog');

    const deleted = await deleteBlogPostById(idToDelete);

    if (deleted.id) redirect('/admin/blog?status=all');

    return <></>;
}
