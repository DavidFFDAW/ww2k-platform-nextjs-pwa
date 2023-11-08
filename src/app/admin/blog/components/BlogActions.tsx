import { Report } from '@prisma/client'
import React from 'react'
import Actions from '@/modules/actions/Actions';
import { changePublishedState, deletePost, toggleAutomaticPostDeletion } from '@/actions/blog.actions';

interface BlogProps {
    post: Report;
}

export default function BlogActions({ post }: BlogProps) {

    return (
        <>
            <div className="actions-grouped-container">
                <Actions.Container>
                    <Actions.Link
                        text={"Editar Post"}
                        color={Actions.Colors.DEFAULT}
                        toHref={`/admin/blog/update/${post.id}`}
                        icon={"pencil-square"}
                    />
                    <Actions.Link
                        text={"Crear Nuevo Post"}
                        color={Actions.Colors.DEFAULT}
                        toHref={"/admin/blog/create"}
                        icon={"plus-circle"}
                    />
                    <form action={toggleAutomaticPostDeletion}>
                        <input type="hidden" name="current_status" value={post.deletable ? 1 : 0} />

                        <Actions.Submit
                            text={
                                post.deletable
                                    ? "Desactivar borrado automático"
                                    : "Activar borrado automático"
                            }
                            color={Actions.Colors.WARNING}
                            icon={post.deletable ? "toggle-on" : "toggle-off"}
                            name="post_id"
                            value={post.id.toString()}
                        />
                    </form>

                    <form action={changePublishedState} className="w1 form-delete">
                        <input type="hidden" name="post_current_publish_state" value={post.visible ? 1 : 0} />
                        <Actions.Submit
                            text={post.visible ? "Despublicar Post" : "Publicar Post"}
                            color={Actions.Colors.WARNING}
                            icon={post.visible ? "eye-slash" : "eye"}
                            name="post_id"
                            value={post.id.toString()}
                        />
                    </form>

                    <form action={deletePost} className="w1 form-delete">
                        <Actions.Submit
                            text={"Borrar Post"}
                            color={Actions.Colors.DELETE}
                            icon={"trash-fill"}
                            name="post_id"
                            value={post.id.toString()}
                        />
                    </form>
                </Actions.Container>
            </div>

        </>
    )
}
