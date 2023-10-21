import React from "react";
import GalleryModule from "@/modules/gallery/GalleryModule";
import Title from "@/components/Title";

export default function page() {
    return (
        <>
            <Title title={"Blog Posts"} icon="list-ul" />

            <GalleryModule />
        </>
    );
}
