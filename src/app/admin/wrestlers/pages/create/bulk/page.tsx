import React from "react";
import { Form } from "@/components/Forms";
import CustomTable from "@/components/Table/CustomTable";
import BulkCreateTable from "./BulkCreateTable";
import { Wrestler } from "@/models/Wrestler";

export const revalidate = 0;

export default async function WrestlersBulkCreatePage() {
    const allWrestlers = await Wrestler.getAllWrestlers();

    return (
        <>
            <Form
                method="POST"
                action="/api/wrestlers/create/bulk"
                sendHttp={true}
                refresh={true}
                loadingState={true}
            >
                <CustomTable title="Creación de Luchadores">
                    <BulkCreateTable allWrestlers={allWrestlers} />
                </CustomTable>
            </Form>
        </>
    );
}
