import { Pagination } from "@/components/Pagination";
import Title from "@/components/Title";
import { TableContainer } from "@/modules/tables";
import TableItem, { TableRow } from "@/modules/tables/components/TableRows";
import { PageContext } from "@/shared/models";
import React from "react";

export default function AdminTwitterPage(context: PageContext) {
    const { page } = context.searchParams;

    return (
        <>
            <Title title={"Twitter"} icon="list-ul" />

            <Pagination page={Number(page)} total={4} numberOfPages={3} />

            {/* <WrestlersSearchForm params={context.searchParams} /> */}

            <div className="down w1 flex between column al-center gap">
                <div className="w1 list-block overflow-y">
                    <div className="wrestlers-list items-listing">
                        <div className="desktop-only">
                            <TableContainer>
                                <TableRow>
                                    <TableItem width={20} align="start">
                                        Imagen
                                    </TableItem>
                                    <TableItem width={30} align="start">
                                        Nombre
                                    </TableItem>
                                    <TableItem width={20} align="start">
                                        Sexo
                                    </TableItem>
                                    <TableItem width={30} align="start">
                                        Estado
                                    </TableItem>
                                    <TableItem width={20} align="end">
                                        Acciones
                                    </TableItem>
                                </TableRow>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
