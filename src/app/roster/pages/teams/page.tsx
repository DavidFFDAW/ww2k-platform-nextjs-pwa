import StatusLabel, {
    StatusLabelContainer,
} from "@/components/Status/StatusLabel";
import Title from "@/components/Title";
import { PageContext } from "@/shared/models";
import React, { Suspense } from "react";
import RosterWrestlersListSkeleton from "../../components/RosterWrestlersListSkeleton";
import { ButtonSecondary } from "@/components/Buttons/Buttons";
import { SearchForm } from "@/components/Forms";
import { Metadata } from "next";
import { getNamedTitle } from "@/utilities/metadatas.utility";
import ListOfTeams from "./ListOfTeams";

export const revalidate = 0;
export const metadata: Metadata = {
    title: getNamedTitle("Roster de Equipos"),
};

export default async function PublicRosterTeamsPage(ctx: PageContext) {
    const searchName = ctx.searchParams.search;
    const searchBrand = ctx.searchParams.brand;

    return (
        <>
            <Title title="Equipos" icon="people" />

            <StatusLabelContainer fixed={true}>
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
            </StatusLabelContainer>

            <SearchForm url="/roster/teams" className="down">
                <div className="w1 flex start gap-small">
                    <input
                        type="search"
                        name="search"
                        placeholder="Buscar..."
                        defaultValue={searchName}
                        className="w1 search-input"
                        alt="Buscar..."
                        about="Buscar..."
                    />
                    <ButtonSecondary
                        type="submit"
                        className="ml-2"
                        text="Buscar"
                    />
                </div>
            </SearchForm>

            <div className="grid-pre-container" style={{ marginTop: 80 }}>
                <Suspense fallback={<RosterWrestlersListSkeleton />}>
                    <ListOfTeams />
                </Suspense>
            </div>
        </>
    );
}
