import Title from "@/components/Title";
import React from "react";
import { prisma } from "@/db/conn";
import LazyImage from "@/components/Image/LazyImage";
import Actions from "@/modules/actions/Actions";
import ChampionshipActions from "./ChampionshipActions";
import Link from "next/link";

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
            <Title title="Championships" icon="trophy">
                <Link href="championships/reigns">
                    Ver reinados
                </Link>
            </Title>

            <section className="championships-list-container w1 flex column center acenter gap-small">
                {championships.map((championship) => (
                    <div
                        key={championship.id}
                        className="w1 flex boxed row acenter start gap"
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

                        <ChampionshipActions championship={championship} />
                    </div>
                ))}
            </section>
        </>
    );
}
