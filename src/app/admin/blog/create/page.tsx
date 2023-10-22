"use client";
import { Boxed } from "@/components/Box/Boxed";
import React from "react";
import BlogDatas, { BlogStatus } from "../components/BlogCreateInputs";
import { ButtonCTA } from "@/components/Buttons/Buttons";
import useCreatePost from "./hooks/useCreatePost";

export default function CreateBlogPostPage() {
    const { handleFormSubmit } = useCreatePost();

    return (
        <>
            <form
                method="POST"
                className="flex center al-center column gap"
                onSubmit={handleFormSubmit}
            >
                <h2 className="page-title" style={{ width: "100%" }}>
                    Creacion de <strong>Post</strong>
                </h2>

                {/* <SimpleBlogCard
                    title={state.post.title}
                    content={state.post.content}
                    creationDate={false}
                    image={state.post.image}
                    className="sticky blog-preview"
                /> */}

                <Boxed title={"Datos"} w="100">
                    <BlogDatas />
                </Boxed>

                <Boxed title={"Estado"} w="100">
                    <BlogStatus />
                </Boxed>

                {/* <NullableLoading condition={}> */}
                <div className="fixed-button">
                    <ButtonCTA type={"submit"} text={"Guardar cambios"} />
                </div>
                {/* </NullableLoading> */}
            </form>
        </>
    );
}
