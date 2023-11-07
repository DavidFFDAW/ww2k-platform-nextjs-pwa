"use client";
import { ButtonCTA } from "@/components/Buttons/Buttons";
import { Input, Textarea } from "@/components/Forms";
import React from "react";

export default function NewCommentForm() {
    const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        console.log("Create comment form:");
        for (const [key, value] of form.entries() as any) {
            console.log(key, ": ", value);
        }
    };

    return (
        <form className="flex start column astart gap-small" onClick={sendForm}>
            <h4 className="uppercase">Crear comentario</h4>

            <Input name="name" label="Nombre" placeholder="Nombre" required />

            <Textarea name="comment" label="Comentario" required />

            <div className="w1 flex end">
                <ButtonCTA type="submit" text="Enviar" />
            </div>
        </form>
    );
}
