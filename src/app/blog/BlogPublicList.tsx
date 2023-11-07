import React from 'react'
import { prisma } from '@/db/conn';
import { existingDateToString } from '@/utilities/date.normalizer.utility';
import Image from '@/components/Image/Image';
import Link from 'next/link';

function getPublishedPosts() {
    return prisma.report.findMany({
        orderBy: {
            created_at: 'desc',
        },
        where: {
            visible: true,
        },
    });
}

export default async function BlogPublicList() {
    const posts = await getPublishedPosts();

    return (
        <>
            <section className='public-blog-items-list flex column center acenter gap'>
                {posts.map((post) => (
                    <Link href={`/blog/post/${post.id}`} className="post boxed flex between gap" key={post.id}>
                        <article className="w1 blog-separation-image flex start al-start gap">
                            <div className="first-column post-image">
                                <Image
                                    width={180}
                                    height={180}
                                    src={post.image as string}
                                    className="post-image"
                                    alt={`${post.title} post banner image`}
                                />
                            </div>

                            <div className="w1 second-column flex start gap column">
                                <h2 className="title uppercase">{post.title}</h2>
                                <p>{post.exceptr}</p>
                                <div className="flex end">
                                    <p>{existingDateToString(post.created_at)}</p>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </section>
        </>
    )
}
