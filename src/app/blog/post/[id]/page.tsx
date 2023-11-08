import { redirect } from "next/navigation";
import React from "react";
import { prisma } from "@/db/conn";
import { existingDateToString } from "@/utilities/date.normalizer.utility";
import Image from "@/components/Image/Image";
import { NullableLoading } from "@/components/Loading";
import NewCommentForm from "./NewCommentForm";

interface BlogPostDetailsProps {
    params: {
        id: string;
    };
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

export default async function BlogPostDetails({
    params,
}: BlogPostDetailsProps) {
    if (!params) return redirect("/blog");
    const post = await getCurrentBlogPost(Number(params.id));
    if (!post) return redirect("/blog");

    return (
        <>
            <div className="w1 flex row center astart gap-smaller flex-responsive wrap">
                <section className="boxed single-blog-post-container flex column start gap-small astart">
                    <h1 className="single-post-title sourcesans">
                        {post.title}
                    </h1>

                    <Image
                        alt="blog post image"
                        className="post-image max-total-image"
                        src={post.image as string}
                        draggable={false}
                        width={300}
                        height={300}
                    />

                    <article className="report-news-content">
                        <p className="blog-post-content sourcesans">
                            {post.content}
                        </p>

                        <div className="down w1 flex end">
                            <p>
                                <strong>
                                    {existingDateToString(post.created_at)}
                                </strong>
                            </p>
                        </div>
                    </article>
                </section>

                <section
                    className="blog-post-comments-section flex column gap"
                    style={{ minWidth: 350 }}
                >
                    <NullableLoading
                        condition={Boolean(post.ReportComments.length > 0)}
                    >
                        <h4
                            className="title uppercase"
                            style={{ color: "#000" }}
                        >
                            Comentarios
                        </h4>
                        {post.ReportComments.map((comment) => (
                            <div className="comment-box" key={comment.id}>
                                <div className="comment-header">
                                    <p>{comment.username}</p>
                                    <p>
                                        {existingDateToString(
                                            comment.created_at
                                        )}
                                    </p>
                                </div>
                                <p className="blog-post-content">
                                    {comment.comment}
                                </p>
                            </div>
                        ))}
                    </NullableLoading>

                    <div className="boxed w1" style={{ minWidth: 350 }}>
                        <NewCommentForm />
                    </div>
                </section>
            </div>
        </>
    );
}
