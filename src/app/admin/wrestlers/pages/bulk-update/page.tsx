import FixedSubmit from "@/components/Buttons/FixedSubmit";
import Grid from "@/components/Layouts/Grid/Grid";
import Padding from "@/components/Layouts/Padding/Padding";
import { Pagination } from "@/components/Pagination/Pagination";
import { getAllWrestlers } from "@/queries/wrestler.queries";
import { getNamedTitle } from "@/utilities/metadatas.utility";
import React from "react";
import { PageContext } from "@/shared/models";
import WrestlerList from "../../components/BulkUpdate/WrestlerList";
import BulkUpdateForm from "../../components/BulkUpdate/BulkUpdateForm";

export const revalidate = 0;

export const metadata = {
    title: getNamedTitle("Wrestlers Bulk Update"),
};

export default async function AdminWrestlerBulkUpdate(params: PageContext) {
    const itemsPerPage = 20;
    const page = Number(params.searchParams.page) || 1;
    const from = (page - 1) * itemsPerPage;
    const wrestlers = await getAllWrestlers();

    return (
        <Padding updown={30}>
            <Padding updown={20}>
                <Pagination
                    page={page}
                    total={wrestlers.length}
                    numberOfPages={3}
                    itemsPerPage={itemsPerPage}
                />
            </Padding>

            <BulkUpdateForm>
                <Grid min={250} gap={10} columns={3} place="center">
                    <WrestlerList
                        list={wrestlers}
                        from={from}
                        offset={page * itemsPerPage}
                    />
                </Grid>

                <FixedSubmit text="Enviar cambios" />
            </BulkUpdateForm>
        </Padding>
    );
}
