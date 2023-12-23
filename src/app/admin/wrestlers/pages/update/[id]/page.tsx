import React from "react";
import { PageContext } from "@/shared/models";
import { getWrestlerByIdOrName } from "@/queries/wrestler.queries";
import { Metadata } from "next";
import { getNamedTitle } from "@/utilities/metadatas.utility";
import Title from "@/components/Title";
import WrestlerCreateUpdateFields from "../../../components/WrestlerForms/WrestlerCreateUpdateFields";
import { Form } from "@/components/Forms";

export const revalidate = 0;
export const metadata: Metadata = {
    title: getNamedTitle("Editar luchador"),
};

export default async function WrestlerUpdatePage({ params }: PageContext) {
    if (!params.id) return <h1>404</h1>;
    const wrestler = await getWrestlerByIdOrName(params.id.replace(/-/g, " "));
    if (!wrestler) return <h1>404</h1>;

    return (
        <>
            <Title title={"Editando " + wrestler.name} />

            <Form
                className="grid two-column-grid astart place-items-normal responsive-grid gap"
                action={`/api/wrestlers/update/${wrestler.id}`}
                sendHttp={true}
                refresh={true}
                method="PUT"
            >
                <WrestlerCreateUpdateFields wrestler={wrestler} />
            </Form>
        </>
    );
}
