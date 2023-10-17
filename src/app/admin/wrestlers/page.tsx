import React from "react";
import { prisma } from "@/db/conn";
import Title from "@/components/Title";
import WrestlerCard from "./components/Card";

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
            <Title title="Wrestlers" />

            {wrestlers.map((wrestler) => (
                <WrestlerCard key={wrestler.id} wrestler={wrestler} />
            ))}
        </>
    );
}
