import React from "react";
import WrestlerCreateUpdateFields from "../../components/WrestlerForms/WrestlerCreateUpdateFields";
import Title from "@/components/Title";
import { Form } from "@/components/Forms";

export default function WrestlerCreatePage() {
    return (
        <>
            <Title title="Creando luchador" />

            <Form
                action="/api/wrestlers/create"
                method="POST"
                className="grid two-column-grid astart responsive-grid gap wrestler-upsert-form"
                redirect="/admin/wrestlers"
                refresh={true}
                sendHttp={true}
            >
                <WrestlerCreateUpdateFields />
            </Form>
        </>
    );
}
