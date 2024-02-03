import React from "react";
import Title from "@/components/Title";
import { getCurrentChampionshipReigns } from "@/queries/championship.reigns.queries";
import RosterCard from "../../components/RosterCard";
import { Wrestler } from "@prisma/client";
import ChampionCard from "./components/ChampionCard";

export default async function RosterChampionsPage() {
    const champs = await getCurrentChampionshipReigns();

    console.log({
        champs,
    });

    return (
        <>
            <Title title="Campeones" icon="people" />

            <div className="grid-pre-container" style={{ marginTop: 80 }}>
                <div className="grid responsive-grid grid-three-column unconventional-grid gap">
                    {champs.map((champ) => {
                        return (
                            <ChampionCard
                                key={champ.id}
                                imgSrc={
                                    champ.ch_tag
                                        ? "/vacant.webp"
                                        : (champ.w_image as string)
                                }
                                wrestler={
                                    {
                                        status: "active",
                                        name: champ.ch_tag
                                            ? champ.team_name
                                            : champ.wrestler_name,
                                        id: champ.id,
                                    } as Wrestler
                                }
                                championship={{
                                    name: champ.ch_name,
                                    brand: champ.ch_brand as string,
                                    image: champ.ch_image as string,
                                    is_tag: champ.ch_tag,
                                }}
                                brand={champ.ch_brand as string}
                            />
                        );
                    })}
                </div>
            </div>

            {/* <div className="grid-pre-container" style={{ marginTop: 80 }}>
                <Suspense fallback={<RosterWrestlersListSkeleton />}>
                    <ChampionsRosterList />
                </Suspense>
            </div> */}
        </>
    );
}
