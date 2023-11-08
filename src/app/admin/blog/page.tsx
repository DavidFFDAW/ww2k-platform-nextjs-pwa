import React from 'react';
import { prisma } from '@/db/conn';
import Title from '@/components/Title';
import StatusLabel, { StatusLabelContainer } from '@/components/Status/StatusLabel';
import { PageContext } from '@/shared/models';
import CreateButton from '@/components/Buttons/CreateButton';
import BlogCard from './components/BlogCard';
import { NullableLoading } from '@/components/Loading';

export const dynamic = 'force-dynamic';

function getBlogPosts(searchParams: any) {
    const filters: any = {};

    if (searchParams.status && searchParams.status !== 'all')
        filters['visible'] = searchParams.status === 'published'

    if (searchParams.deletable) filters['deletable'] = true;

    return prisma.report.findMany({
        orderBy: {
            created_at: 'desc',
        },
        where: filters,
    });
}

export default async function BlogPostsList({ searchParams }: PageContext) {
    const blogPosts = await getBlogPosts(searchParams);

    return (
        <>
            <Title title={'Blog Posts'} icon="list-ul" />

            <StatusLabelContainer>
                <StatusLabel
                    name="all"
                    text={'Todos'}
                    href={'?status=all'}
                    activeLink={searchParams.status}
                ></StatusLabel>
                <StatusLabel
                    name="published"
                    text={'Publicados'}
                    href={'?status=published'}
                    activeLink={searchParams.status}
                ></StatusLabel>
                <StatusLabel
                    name="non-published"
                    text={'No publicados'}
                    href={'?status=non-published'}
                    activeLink={searchParams.status}
                ></StatusLabel>
                <StatusLabel
                    name="1"
                    text={'Con borrado automático'}
                    href={'?deletable=1'}
                    activeLink={searchParams.deletable}
                ></StatusLabel>
            </StatusLabelContainer>

            <NullableLoading condition={Boolean(blogPosts)}>
                <div className="flex center gap column down">
                    {blogPosts.map((post, index) => {
                        const key = post.id ? post.id : index;
                        return <BlogCard post={post} key={key} actions={true} />;
                    })}
                </div>
            </NullableLoading>

            <CreateButton endpoint={'blog/create'} />
        </>
    );
}
