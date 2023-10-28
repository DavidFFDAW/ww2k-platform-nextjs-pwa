import Title from "@/components/Title";
import React from "react";
import { prisma } from "@/db/conn";
import LazyImage from "@/components/Image/LazyImage";

function getChampionships() {
    return prisma.championship.findMany({
        orderBy: {
            name: "asc",
        },
        include: {
            ChampionshipReign: true,
        },
    });
}

export default async function AdminChampionshipsPage() {
    const championships = await getChampionships();
    return (
        <>
            <Title title="Championships" icon="trophy" />

            {championships.map((championship) => (
                <div
                    key={championship.id}
                    className="flex row acenter start gap"
                >
                    <LazyImage
                        src={championship.image}
                        alt={championship.name as string}
                        width={100}
                        height={100}
                    />
                    <h4>{championship.name}</h4>
                    <p>{championship.active ? "Activo" : "Desactivado"}</p>
                    <p>
                        {championship.ChampionshipReign.length > 0
                            ? "Tiene reinados"
                            : "No tiene reinados"}
                    </p>
                </div>
            ))}
        </>
    );
}
