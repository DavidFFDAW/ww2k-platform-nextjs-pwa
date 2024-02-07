import React from "react";
import Title from "@/components/Title";
import { IParsedChampionships, getCurrentChampionshipReigns } from "@/queries/championship.reigns.queries";
import ChampionCard from "./components/ChampionCard";
import TagTeamChampionCard from "./components/TagTeamChampionCard";
import BrandChampionsList from "./components/BrandChampionsList";
import BrandImage from "../../components/BrandImage";

export const revalidate = 0;

export default async function RosterChampionsPage() {
    const champs = await getCurrentChampionshipReigns();
    console.log({
        champs,
    });
    

    return (
        <>
            <Title title="Campeones" icon="people" />

            <div className="grid-pre-container flex column gap" style={{ marginTop: 80 }}>
                <div className="w1 flex center">
                    <BrandImage brand="RAW" />
                </div>
                <div className="grid responsive-grid grid-three-column champions-roster-list gap">
                    <BrandChampionsList list={champs.RAW} />
                </div>
            </div>
            <div className="grid-pre-container flex column gap" style={{ marginTop: 100 }}>
                <div className="w1 flex center">
                    <BrandImage brand="SD" />
                </div>
                <div className="grid responsive-grid grid-three-column champions-roster-list gap">
                    <BrandChampionsList list={champs.SD} />
                </div>
            </div>

            <div className="grid-pre-container flex column gap" style={{ marginTop: 100 }}>
                <div className="w1 flex center">
                    <BrandImage brand="AWL" />
                </div>
                <div className="grid responsive-grid grid-three-column champions-roster-list gap">
                    <BrandChampionsList list={champs.AWL} />
                </div>
            </div>

            <div className="grid-pre-container flex column gap" style={{ marginTop: 100 }}>
                <div className="w1 flex center">
                    <h2>Comunes</h2>
                </div>
                <div className="grid responsive-grid grid-three-column champions-roster-list gap">
                    <BrandChampionsList list={champs.ALL} />
                </div>
            </div>
        </>
    );
}
