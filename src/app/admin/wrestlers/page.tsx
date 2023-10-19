import React from "react";
import { prisma } from "@/db/conn";
import Title from "@/components/Title";
import WrestlerCard from "./components/Card";
import { NullableLoading } from "@/components/Loading/LoadingComponent";
import CreateButton from "@/components/Buttons/CreateButton";
import { PageContext } from "@/shared/models";
import { Pagination } from "@/components/Pagination/Pagination";
import SearchForm from "./components/SearchForm";
// import TableItem, { TableRow } from "./components/TableItem";

async function getWrestlers(page: number) {
    const realPage = page || 1;
    const offset = Math.abs((realPage - 1) * 10);
    const total = await prisma.wrestler.count({
        where: {
            status: "active",
        },
    });
    const wrestlers = await prisma.wrestler.findMany({
        take: 10,
        skip: offset,
        where: {
            status: "active",
        },
        orderBy: {
            name: "asc",
        },
    });

    return { wrestlers, total };
}

export default async function WrestlerListPage(context: PageContext) {
    const { page } = context.searchParams;
    const { wrestlers, total } = await getWrestlers(page);

    if (wrestlers.length <= 0) return <Title title="No Wrestlers" />;

    return (
        <>
            <Title title={"Wrestlers"} icon="list-ul" />

            <Pagination page={Number(page)} total={total} />

            {/* <SearchForm /> */}

            <div className="w1 flex between column al-center gap">
                <NullableLoading condition={wrestlers.length}>
                    <div className="w1 pagination-block"></div>
                </NullableLoading>

                <div className="w1 list-block overflow-y">
                    <div className="wrestlers-list items-listing">
                        <NullableLoading condition={wrestlers.length <= 0}>
                            No se han encontrado resultados con estos criterios
                            de busqueda
                        </NullableLoading>

                        {/* <TableRow>
                            <TableItem width={200}>Imagen</TableItem>
                            <TableItem width={200}>Nombre</TableItem>
                            <TableItem width={200}>Status</TableItem>
                            <TableItem width={200}>Sexo</TableItem>
                            <TableItem width={200}>Actions</TableItem>
                        </TableRow> */}

                        <NullableLoading condition={wrestlers.length > 0}>
                            {wrestlers.map((wrestler) => (
                                <WrestlerCard
                                    key={wrestler.id}
                                    wrestler={wrestler}
                                />
                            ))}
                        </NullableLoading>
                    </div>
                </div>

                <Pagination page={Number(page)} total={total} />

                <CreateButton endpoint={"wrestlers/create/new"} />
            </div>
        </>
    );
}
