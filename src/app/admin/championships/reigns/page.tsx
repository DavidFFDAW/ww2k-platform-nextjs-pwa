import Title from "@/components/Title";
import React from "react";
import { prisma } from "@/db/conn";
import { existingDateToString } from "@/utilities/date.normalizer.utility";
import Image from "@/components/Image/Image";

function getReigns() {
    return prisma.championshipReign.findMany({
        orderBy: {
            won_date: "desc",
        },
        include: {
            Championship: true,
            Wrestler: true,
            Team: {
                include: {
                    WrestlerTeam: {
                        include: {
                            Wrestler: true,
                        },
                    },
                },
            },
        },
    });
}

export default async function AdminChampionshipsPage() {
    const reigns = await getReigns();

    return (
        <>
            <Title title="Championship Reigns" icon="trophy-fill" />

            {reigns.map((reign) => (
                <div key={reign.id} className="flex row acenter start gap">
                    <div className="flex center acenter column gap-small">
                        <Image
                            src={reign.Championship.image}
                            alt={reign.Championship.name as string}
                            width={100}
                            height={100}
                        />
                        <h4>{reign.Championship.name}</h4>
                    </div>
                    <div className="flex center acenter column gap-small">
                        {reign.Championship.tag && reign.Team ? (
                            <>
                                <div className="flex center acenter row gap-small">
                                    {reign.Team.WrestlerTeam.map((wrestler) => (
                                        <Image
                                            key={wrestler.id}
                                            src={
                                                wrestler.Wrestler
                                                    .image_name as string
                                            }
                                            alt={
                                                wrestler.Wrestler.name as string
                                            }
                                            width={100}
                                            height={100}
                                        />
                                    ))}
                                </div>
                                <h4>{reign.Team.name as string}</h4>
                            </>
                        ) : (
                            <>
                                <Image
                                    src={reign.Wrestler.image_name as string}
                                    alt={reign.Wrestler.name as string}
                                    width={100}
                                    height={100}
                                />
                                <h4>{reign.Wrestler.name}</h4>
                            </>
                        )}
                    </div>
                    <p>{existingDateToString(reign.won_date)}</p>
                    <p>{existingDateToString(reign.lost_date)}</p>
                    <p>{reign.days} días</p>
                </div>
            ))}
        </>
    );
}
