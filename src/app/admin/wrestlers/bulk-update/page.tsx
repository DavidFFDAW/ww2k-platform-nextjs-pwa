import { Boxed } from "@/components/Box/Boxed";
import FixedSubmit from "@/components/Buttons/FixedSubmit";
import LazyImage from "@/components/Image/LazyImage";
import Flex from "@/components/Layouts/Flex";
import Grid from "@/components/Layouts/Grid/Grid";
import Padding from "@/components/Layouts/Padding/Padding";
import { Pagination } from "@/components/Pagination/Pagination";
import { getAllWrestlers } from "@/queries/wrestler.queries";
import { getNamedTitle } from "@/utilities/metadatas.utility";
import React from "react";
import BulkUpdateForm from "./BulkUpdateForm";
import { PageContext } from "@/shared/models";
import { OnChangeInput } from "@/components/Forms/Inputs/OnChangeInput";

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
                    itemsPerPage={itemsPerPage}
                />
            </Padding>

            <BulkUpdateForm>
                <Grid min={250} gap={10} columns={3} place="center">
                    {wrestlers
                        .slice(from, page * itemsPerPage)
                        .map((wrestler) => (
                            <Boxed
                                w="100"
                                key={wrestler.id}
                                className={
                                    wrestler.status == "released"
                                        ? "opacity-05"
                                        : "opacity-normal"
                                }
                            >
                                <Flex
                                    direction="column"
                                    align="center"
                                    gap={10}
                                >
                                    <LazyImage
                                        src={wrestler.image_name as string}
                                        alt={wrestler.name}
                                        width={80}
                                        height={80}
                                        imgClassName="rounded"
                                    />
                                    <input
                                        className="w1"
                                        type="hidden"
                                        name={`ids[]`}
                                        value={wrestler.id}
                                    />
                                    <OnChangeInput
                                        type="text"
                                        name={`names[]`}
                                        value={wrestler.name}
                                        label="Nombre"
                                    />
                                    <OnChangeInput
                                        type="text"
                                        name={`aliases[]`}
                                        value={wrestler.alias as string}
                                        label="Alias"
                                    />
                                    <OnChangeInput
                                        type="text"
                                        name={`finishers[]`}
                                        value={wrestler.finisher as string}
                                        label="Finisher"
                                    />
                                </Flex>
                            </Boxed>
                        ))}
                </Grid>

                <FixedSubmit text="Enviar cambios" />
            </BulkUpdateForm>
        </Padding>
    );
}
