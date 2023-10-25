import React from "react";
import { prisma } from "@/db/conn";
import Title from "@/components/Title";
import WrestlerCard from "./components/Card";
import { NullableLoading } from "@/components/Loading/LoadingComponent";
import CreateButton from "@/components/Buttons/CreateButton";
import { PageContext } from "@/shared/models";
import { Pagination } from "@/components/Pagination/Pagination";
import WrestlersSearchForm from "./components/WrestlersSearchForm";
import { TableContainer } from "@/modules/tables";
import TableItem, { TableRow } from "@/modules/tables/components/TableRows";

async function getWrestlers(page: number, searchParams: any) {
    const realPage = page || 1;
    const offset = Math.abs((realPage - 1) * 10);
    const filters: any = {
        name: {
            contains: searchParams.name || "",
        },
    };
    if (searchParams.status) filters["status"] = searchParams.status;
    if (searchParams.gender) filters["sex"] = searchParams.gender;

    if (searchParams.brand) filters["brand"] = searchParams.brand;

    const total = await prisma.wrestler.count({
        where: filters,
    });
    const wrestlers = await prisma.wrestler.findMany({
        take: 10,
        skip: offset,
        where: filters,
        orderBy: {
            name: "asc",
        },
    });

    return { wrestlers, total };
}

export default async function WrestlerListPage(context: PageContext) {
    const { page } = context.searchParams;
    const { wrestlers, total } = await getWrestlers(page, context.searchParams);

    return (
        <>
            <Title title={"Wrestlers"} icon="list-ul" />

            <Pagination page={Number(page)} total={total} />

            <WrestlersSearchForm params={context.searchParams} />

            <div className="w1 flex between column al-center gap">
                <NullableLoading condition={wrestlers.length}>
                    <div className="w1 pagination-block"></div>
                </NullableLoading>

                <div className="w1 list-block overflow-y">
                    <div className="wrestlers-list items-listing">
                        <NullableLoading condition={wrestlers.length <= 0}>
                            <div className="down">
                                No se han encontrado resultados con estos
                                criterios de busqueda
                            </div>
                        </NullableLoading>

                        {/* <TableContainer>
                            <TableRow>
                                <TableItem width={20}>Imagen</TableItem>
                                <TableItem width={70}>Nombre</TableItem>
                                <TableItem width={10}>Sexo</TableItem>
                            </TableRow>
                        </TableContainer> */}

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

                <CreateButton endpoint={"wrestlers/create"} />
            </div>
        </>
    );
}
