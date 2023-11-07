import Title from '@/components/Title';
import { redirect } from 'next/navigation';
import React from 'react'
import { prisma } from '@/db/conn';
import { existingDateToString } from '@/utilities/date.normalizer.utility';
import Image from '@/components/Image/Image';
import { NullableLoading } from '@/components/Loading';

interface BlogPostDetailsProps {
    params: {
        id: string;
    }
}

function getCurrentBlogPost(id: number) {
    return prisma.report.findFirst({
        where: {
            id: id,
        },
        include: {
            ReportComments: true,
        },
    });
}

export default async function BlogPostDetails({ params }: BlogPostDetailsProps) {
    if (!params) return redirect('/blog');
    const post = await getCurrentBlogPost(Number(params.id));
    if (!post) return redirect('/blog');

    return (
        <>
            <Title title={post.title} icon="newspaper" />;

            <div className='flex column start acenter gap'>

                <section className='boxed w1 flex start gap astart'>
                    <Image
                        alt='blog post image'
                        className='post-image max-image maximage maximg max-img'
                        src={post.image as string}
                        draggable={false}
                        width={300}
                        height={300}
                    />

                    <article className='report-news-content'>
                        <p>{post.content}</p>

                        <div className='down w1 flex end'>
                            <p><strong>{existingDateToString(post.created_at)}</strong></p>
                        </div>
                    </article>
                </section>

                <NullableLoading condition={Boolean(post.ReportComments)}>
                    <section className='comments-section'>
                        {post.ReportComments.map((comment) => (
                            <div className='comment-box' key={comment.id}>
                                <div className='comment-header'>
                                    <p>{comment.username}</p>
                                    <p>{existingDateToString(comment.created_at)}</p>
                                </div>
                                <p>{comment.comment}</p>
                            </div>
                        ))}
                    </section>
                </NullableLoading>
            </div>
        </>
    )
}
