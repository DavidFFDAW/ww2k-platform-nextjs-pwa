import React from "react";
import Title from "@/components/Title";
import { prisma } from "@/db/conn";
import Grid from "@/components/Layouts/Grid/Grid";
import LazyImageTwo from "@/components/Image/LazyImageTwo";
import { Metadata } from "next";
import { getNamedTitle } from "@/utilities/metadatas.utility";
import GalleryList from "../../components/GalleryList";
import { Form } from "@/components/Forms";
import { FixedSubmit } from "@/components/Buttons";
import { getWrestlerImages } from "@/queries/gallery.queries";

export const revalidate = 0;
export const metadata: Metadata = {
    title: getNamedTitle("Galeria"),
};

export default async function GalleryListPage() {
    const galleryItems = (await getWrestlerImages()) as any[];

    return (
        <>
            <Title title="Galeria" icon="images" />

            <Form
                action="/api/admin/gallery/update"
                method="POST"
                debug={true}
                sendHttp={true}
            >
                <GalleryList list={galleryItems} />
                <FixedSubmit text="Enviar cambios" />
            </Form>
        </>
    );
}
