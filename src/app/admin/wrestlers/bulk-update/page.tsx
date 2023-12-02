import { Boxed } from "@/components/Box/Boxed";
import FixedSubmit from "@/components/Buttons/FixedSubmit";
import { Form } from "@/components/Forms";
import LazyImage from "@/components/Image/LazyImage";
import Flex from "@/components/Layouts/Flex";
import Grid from "@/components/Layouts/Grid/Grid";
import Padding from "@/components/Layouts/Padding/Padding";
import { Pagination } from "@/components/Pagination/Pagination";
import { getAllWrestlers } from "@/queries/wrestler.queries";
import { getNamedTitle } from "@/utilities/metadatas.utility";
import React from "react";

export const metadata = {
    title: getNamedTitle("Wrestlers Bulk Update"),
};

export default async function AdminWrestlerBulkUpdate() {
    const wrestlers = await getAllWrestlers();
    const itemsPerPage = 50;

    return (
        <Padding updown={30}>
            <Padding updown={20}>
                <Pagination
                    page={1}
                    total={wrestlers.length}
                    itemsPerPage={itemsPerPage}
                />
            </Padding>

            <Form
                method="POST"
                action="/admin/wrestlers/bulk-update"
                sendHttp={false}
                debug={true}
                refresh={false}
                redirect="/admin/wrestlers/bulk-update"
            >
                <Grid min={250} gap={10} columns={3} place="center">
                    {wrestlers.slice(0, itemsPerPage).map((wrestler) => (
                        <Boxed w="100" key={wrestler.id}>
                            <Flex direction="column" align="center" gap={10}>
                                <LazyImage
                                    src={wrestler.image_name as string}
                                    alt={wrestler.name}
                                    width={80}
                                    height={80}
                                    imgClassName="rounded"
                                />
                                <input
                                    className="w1"
                                    type="text"
                                    name={`wrestler[name]`}
                                    defaultValue={wrestler.name}
                                />
                                <input
                                    className="w1"
                                    type="text"
                                    name={`wrestler[alias]`}
                                    defaultValue={wrestler.alias as string}
                                />
                                <input
                                    className="w1"
                                    type="text"
                                    name={`wrestler[finisher]`}
                                    defaultValue={wrestler.finisher as string}
                                />
                            </Flex>
                        </Boxed>
                    ))}
                </Grid>

                <FixedSubmit text="Enviar cambios" />
            </Form>
        </Padding>
    );
}
