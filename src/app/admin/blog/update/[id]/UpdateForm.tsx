"use client";
import { Report } from "@prisma/client";
import React from "react";
import { ImageInput, Input, InputDate, ToggleInput } from "@/components/Forms";
import { parseFormatDate } from "@/utilities/date.normalizer.utility";
import { ButtonCTA } from "@/components/Buttons/Buttons";
import { Boxed } from "@/components/Box/Boxed";
import { QuillEditor } from "@/components/Forms";
import useUpdatePost from "../../create/hooks/useUpdatePost";

export default function UpdateForm({ post }: { post: Report }) {
    const { handleUpdatePostSubmit } = useUpdatePost();

    return (
        <>
            <form
                method="POST"
                className="flex center al-center column gap"
                onSubmit={(e) => handleUpdatePostSubmit(e, post.id as number)}
            >
                <h2 className="page-title" style={{ width: "100%" }}>
                    Modificacion de <strong>Post</strong>
                </h2>

                <Boxed title={"Datos"} w="100">
                    <div className="w1 flex column al-start gap-small">
                        <Input
                            type="text"
                            label="Título"
                            name="title"
                            required={true}
                            placeholder="Titulo de la noticia"
                            value={post.title}
                        />

                        <ImageInput
                            label="Imagen de la noticia"
                            placeholder="Imagen de la noticia"
                            name="image"
                            imageSrc={post.image as string}
                        />

                        {/* <Textarea
                            label={"Contenido"}
                            name={"content"}
                            required={true}
                            rows={10}
                            value={post.content}
                        /> */}

                        <QuillEditor
                            name="content"
                            placeholder="Contenido del post"
                            value={post.content as string}
                        />

                        <InputDate
                            label={"Fecha de publicacion"}
                            name={"date_publication"}
                            required={true}
                            value={parseFormatDate(post.created_at)}
                        />
                    </div>
                </Boxed>

                <Boxed title={"Estado"} w="100">
                    <div className="w1 flex column al-start gap-small">
                        <div className="w1 flex evenly al-center gap">
                            <ToggleInput
                                label="Publicado"
                                name="published"
                                checked={post.visible as boolean}
                            />
                            <ToggleInput
                                label="¿Se puede borrar?"
                                name="is_deletable"
                                checked={post.deletable as boolean}
                            />
                        </div>
                    </div>
                </Boxed>

                <div className="fixed-button">
                    <ButtonCTA type={"submit"} text={"Guardar cambios"} />
                </div>
            </form>
        </>
    );
}
