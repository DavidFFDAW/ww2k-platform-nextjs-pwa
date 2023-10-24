"use client";
import React from "react";
// import BlogActions from './BlogActions';
import { transformDate } from "@/utilities/date.normalizer.utility";
import { NullableLoading } from "@/components/Loading/LoadingComponent";
import Image from "@/components/Image/Image";
import BlogActions from "./BlogActions";


export default function BlogCard({
    post,
    actions = true,
}: any) {

    return (
        <div className="post boxed flex between gap">
            <div className="w1 blog-separation-image flex start al-start gap">

                <div className="first-column post-image">
                    <Image
                        src={post.image}
                        className="post-image"
                        alt={`${post.title} post banner image`}
                    />
                </div>

                <div className="w1 second-column flex start gap column">
                    <h2 className="title uppercase">{post.title}</h2>
                    <p>{post.exceptr}</p>
                    <div className="flex end">
                        <p>{transformDate(post.created_at)}</p>
                    </div>
                </div>
            </div>

            <NullableLoading condition={Boolean(actions)}>
                <BlogActions post={post} />
            </NullableLoading>
        </div>
    );
}
