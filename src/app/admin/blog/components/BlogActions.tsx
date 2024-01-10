import { Report } from "@prisma/client";
import React from "react";
import {
    changePublishedState,
    deletePost,
    toggleAutomaticPostDeletion,
} from "@/actions/blog.actions";
import ActionsContainer from "@/modules/actions/Actions";
import { ActionColors, ActionLink, ActionSubmit } from "@/modules/actions";

interface BlogProps {
    post: Report;
}

export default function BlogActions({ post }: BlogProps) {
    return (
        <>
            <div className="actions-grouped-container">
                <ActionsContainer>
                    <ActionLink
                        text={"Editar Post"}
                        color={ActionColors.DEFAULT}
                        toHref={`/admin/blog/update/${post.id}`}
                        icon={"pencil-square"}
                    />
                    <ActionLink
                        text={"Crear Nuevo Post"}
                        color={ActionColors.DEFAULT}
                        toHref={"/admin/blog/create"}
                        icon={"plus-circle"}
                    />
                    <form action={toggleAutomaticPostDeletion}>
                        <input
                            type="hidden"
                            name="current_status"
                            value={post.deletable ? 1 : 0}
                        />

                        <ActionSubmit
                            text={
                                post.deletable
                                    ? "Desactivar borrado automático"
                                    : "Activar borrado automático"
                            }
                            color={ActionColors.WARNING}
                            icon={post.deletable ? "toggle-on" : "toggle-off"}
                            name="post_id"
                            value={post.id.toString()}
                        />
                    </form>

                    <form
                        action={changePublishedState}
                        className="w1 form-delete"
                    >
                        <input
                            type="hidden"
                            name="post_current_publish_state"
                            value={post.visible ? 1 : 0}
                        />
                        <ActionSubmit
                            text={
                                post.visible
                                    ? "Despublicar Post"
                                    : "Publicar Post"
                            }
                            color={ActionColors.WARNING}
                            icon={post.visible ? "eye-slash" : "eye"}
                            name="post_id"
                            value={post.id.toString()}
                        />
                    </form>

                    <form action={deletePost} className="w1 form-delete">
                        <ActionSubmit
                            text={"Borrar Post"}
                            color={ActionColors.DELETE}
                            icon={"trash-fill"}
                            name="post_id"
                            value={post.id.toString()}
                        />
                    </form>
                </ActionsContainer>
            </div>
        </>
    );
}
