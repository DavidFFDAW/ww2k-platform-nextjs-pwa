import React from "react";
import Title from "@/components/Title";
import { getCurrentChampionshipReigns } from "@/queries/championship.reigns.queries";
import { Wrestler } from "@prisma/client";
import ChampionCard from "./components/ChampionCard";
import BrandImage from "../../components/BrandImage";
import LazyImageTwo from "@/components/Image/LazyImageTwo";
import RosterCardName from "../../components/RosterCardName";
import TagTeamChampionCard from "./components/TagTeamChampionCard";

export const revalidate = 0;

export default async function RosterChampionsPage() {
    const champs = await getCurrentChampionshipReigns();

    return (
        <>
            <Title title="Campeones" icon="people" />

            <div className="grid-pre-container" style={{ marginTop: 80 }}>
                <div className="grid responsive-grid grid-three-column champions-roster-list gap">
                    {champs.map((reign) => {
                        if (Boolean(reign.championship.tag))
                            return (
                                <TagTeamChampionCard
                                    reign={reign}
                                    key={reign.id}
                                />
                            );
                        return <ChampionCard reign={reign} key={reign.id} />;
                    })}
                </div>
            </div>
        </>
    );
}
