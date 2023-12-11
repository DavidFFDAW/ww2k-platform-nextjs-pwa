"use client";
import React from "react";
import useRoster from "./useRoster";
import Title from "@/components/Title";
import { ConditionalLoading } from "@/components/Loading";
import { ComponentSpinner } from "@/components/Spinner/Spinner";
import RosterCard from "./RosterCard";
import StatusLabel, {
    StatusLabelContainer,
} from "@/components/Status/StatusLabel";
import { useSearchParams } from "next/navigation";
import { Input, SearchForm } from "@/components/Forms";
import { ButtonSecondary } from "@/components/Buttons/Buttons";
import "./roster.css";
// import { Metadata } from "next";
// import { getNamedTitle } from "@/utilities/metadatas.utility";

// export const metadata: Metadata = {
//     title: getNamedTitle("Roster"),
// };

export default function RosterPage() {
    const search = useSearchParams();
    const { wrestlers, isLoading } = useRoster();

    return (
        <>
            {/* Need to add an Skeleton to this page so it is loaded like it will be in the end */}
            <Title title="Roster" icon="list-ul" />

            <StatusLabelContainer fixed={true}>
                <StatusLabel
                    name="all"
                    text={"Todos"}
                    href={"?"}
                    activeLink={search.get("brand")}
                />
                <StatusLabel
                    name="RAW"
                    text={"RAW"}
                    href={"?brand=RAW"}
                    activeLink={search.get("brand")}
                />
                <StatusLabel
                    name="SD"
                    text={"SmackDown"}
                    href={"?brand=SD"}
                    activeLink={search.get("brand")}
                />
                <StatusLabel
                    name="AWL"
                    text={"AWL"}
                    href={"?brand=AWL"}
                    activeLink={search.get("brand")}
                />
            </StatusLabelContainer>

            <SearchForm url="/roster">
                <div className="w1 flex start gap-small">
                    {/* Need to change this search input to some fancy new one */}
                    <Input
                        label="Buscador"
                        name="search"
                        placeholder="Buscar"
                        type="search"
                    />
                    <ButtonSecondary
                        type="submit"
                        className="ml-2"
                        text="Buscar"
                    />
                </div>
            </SearchForm>

            <React.Suspense fallback={<ComponentSpinner />}>
                <ConditionalLoading
                    condition={!isLoading && wrestlers.length > 0}
                    fallback={<ComponentSpinner />}
                >
                    <div
                        style={{ marginTop: 80 }}
                        className="grid responsive-grid grid-three-column unconventional-grid gap"
                    >
                        {wrestlers.map((wrestler, index) => {
                            const legendBrand = [
                                "retired",
                                "semi-active",
                            ].includes(wrestler.status);

                            return (
                                <RosterCard
                                    key={wrestler.id}
                                    brand={
                                        legendBrand ? "LEGEND" : wrestler.brand
                                    }
                                    name={wrestler.name}
                                    imgSrc={wrestler.image_name as string}
                                />
                            );
                        })}
                    </div>
                </ConditionalLoading>
            </React.Suspense>
        </>
    );
}
