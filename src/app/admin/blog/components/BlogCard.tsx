"use client";
import React from "react";
// import BlogActions from './BlogActions';
import { transformDate } from "@/utilities/date.normalizer.utility";
import { NullableLoading } from "@/components/Loading/LoadingComponent";
import Actions from "@/modules/actions/Actions";
import Image from "@/components/Image/Image";

export default function BlogCard({
    post,
    checks = false,
    actions = true,
}: any) {
    return (
        <div className="post boxed flex between gap">
            <div className="w1 blog-separation-image flex start al-start gap">
                <NullableLoading condition={Boolean(checks)}>
                    <input
                        className="checkbox-grouped-actions"
                        type="checkbox"
                        name="blog-list-checks"
                    />
                </NullableLoading>

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
                <div className="actions-grouped-container">
                    <Actions.Container>
                        <Actions.Link
                            text={"Editar Post"}
                            color={Actions.Colors.DEFAULT}
                            toHref={`/admin/blog/edit/${post.id}`}
                            icon={"pencil-square"}
                        />
                        <Actions.Link
                            text={"Crear Nuevo Post"}
                            color={Actions.Colors.DEFAULT}
                            toHref={"/admin/blog/create"}
                            icon={"plus-circle"}
                        />
                        <Actions.Button
                            text={
                                post.deletable
                                    ? "Desactivar borrado automático"
                                    : "Activar borrado automático"
                            }
                            color={Actions.Colors.WARNING}
                            href={"/admin/blog/automated-delete"}
                            icon={post.deletable ? "toggle-on" : "toggle-off"}
                        />
                        <Actions.Link
                            text={"Borrar Post"}
                            color={Actions.Colors.DELETE}
                            toHref={`/admin/blog/delete/${post.id}`}
                            icon={"trash-fill"}
                        />
                    </Actions.Container>
                </div>
            </NullableLoading>
        </div>
    );
}
