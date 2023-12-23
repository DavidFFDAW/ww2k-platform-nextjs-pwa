import React from "react";
import WrestlerCreateUpdateFields from "../../components/WrestlerForms/WrestlerCreateUpdateFields";
import Title from "@/components/Title";
import { Form } from "@/components/Forms";
import { Metadata } from "next";
import { getNamedTitle } from "@/utilities/metadatas.utility";

export const revalidate = 0;
export const metadata: Metadata = {
    title: getNamedTitle("Crear luchador"),
};

export default function WrestlerCreatePage() {
    return (
        <>
            <Title title="Creando luchador" />

            <Form
                action="/api/wrestlers/create"
                method="POST"
                className="grid two-column-grid astart place-items-normal responsive-grid gap wrestler-upsert-form"
                redirect="/admin/wrestlers"
                refresh={true}
                sendHttp={true}
            >
                <WrestlerCreateUpdateFields />
            </Form>
        </>
    );
}
