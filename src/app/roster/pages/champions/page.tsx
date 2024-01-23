import React, { Suspense } from "react";
import RosterWrestlersListSkeleton from "../../components/RosterWrestlersListSkeleton";
import Title from "@/components/Title";
import ChampionsRosterList from "./ChampionsRosterList";
import { getCurrentChampionshipReigns } from "@/queries/championship.reigns.queries";
import RosterCard from "../../components/RosterCard";
import { Wrestler } from "@prisma/client";

export default async function RosterChampionsPage() {
    const champs = await getCurrentChampionshipReigns();

    console.log({
        champs,
    });

    return (
        <>
            <Title title="Campeones" icon="people" />

            {/* <StatusLabelContainer fixed={true}>
                <StatusLabel
                    name="all"
                    text={"Todos"}
                    href={"?"}
                    activeLink={searchBrand}
                />
                <StatusLabel
                    name="RAW"
                    text={"RAW"}
                    href={"?brand=RAW"}
                    activeLink={searchBrand}
                />
                <StatusLabel
                    name="SD"
                    text={"SmackDown"}
                    href={"?brand=SD"}
                    activeLink={searchBrand}
                />
                <StatusLabel
                    name="AWL"
                    text={"AWL"}
                    href={"?brand=AWL"}
                    activeLink={searchBrand}
                />
            </StatusLabelContainer> */}

            <div className="grid-pre-container" style={{ marginTop: 80 }}>
                <div className="grid responsive-grid grid-three-column unconventional-grid gap">
                    {champs.map((champ) => {
                        return (
                            <RosterCard
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
