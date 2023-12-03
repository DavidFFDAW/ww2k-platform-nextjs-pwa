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
                            <Boxed w="100" key={wrestler.id}>
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
                                        defaultValue={wrestler.id}
                                    />
                                    <input
                                        className="w1"
                                        type="text"
                                        name={`names[]`}
                                        defaultValue={wrestler.name}
                                    />
                                    <input
                                        className="w1"
                                        type="text"
                                        name={`aliases[]`}
                                        defaultValue={wrestler.alias as string}
                                    />
                                    <input
                                        className="w1"
                                        type="text"
                                        name={`finishers[]`}
                                        defaultValue={
                                            wrestler.finisher as string
                                        }
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
