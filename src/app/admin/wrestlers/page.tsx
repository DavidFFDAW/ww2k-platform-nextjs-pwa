import React from "react";
import { prisma } from "@/db/conn";
import Title from "@/components/Title";
import WrestlerCard from "./components/Card";
import { NullableLoading } from "@/components/Loading/LoadingComponent";
import CreateButton from "@/components/Buttons/CreateButton";

async function getWrestlers() {
    return await prisma.wrestler.findMany({
        take: 10,
        orderBy: {
            name: "asc",
        },
    });
}

export default async function WrestlerListPage() {
    const wrestlers = await getWrestlers();

    if (wrestlers.length <= 0) return <Title title="No Wrestlers" />;

    return (
        <>
            <Title title={'Wrestlers'} icon="list-ul" />

            <div className="w1 flex between column al-center gap">
                <NullableLoading condition={wrestlers.length}>
                    <div className="w1 pagination-block">

                    </div>
                </NullableLoading>

                <div className="w1 list-block overflow-y">
                    <div className="wrestlers-list items-listing">
                        <NullableLoading condition={wrestlers.length <= 0}>
                            No se han encontrado resultados con estos criterios de busqueda
                        </NullableLoading>

                        <NullableLoading condition={wrestlers.length > 0}>
                            {wrestlers.map(wrestler => (
                                <WrestlerCard key={wrestler.id} wrestler={wrestler} />
                            ))}
                        </NullableLoading>
                    </div>
                </div>

                <CreateButton endpoint={'wrestlers/create/new'} />
            </div>
        </>
    );
}
