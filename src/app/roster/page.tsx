"use client";
import * as React from "react";
import useRoster from "./useRoster";
import Title from "@/components/Title";
import { ConditionalLoading } from "@/components/Loading";
import { ComponentSpinner } from "@/components/Spinner/Spinner";
import RosterCard from "./RosterCard";
import StatusLabel, { StatusLabelContainer } from "@/components/Status/StatusLabel";
import { useSearchParams } from "next/navigation";

export default function RosterPage() {
    const search = useSearchParams();
    console.log(search.get('brand'));

    const { wrestlers, isLoading, setNewPage } = useRoster();

    return (
        <>
            <Title title="Roster" icon="list-ul" />

            <StatusLabelContainer>
                <StatusLabel
                    name="all"
                    text={'Todos'}
                    href={'?'}
                    activeLink={search.get('brand')}
                />
                <StatusLabel
                    name="RAW"
                    text={'RAW'}
                    href={'?brand=RAW'}
                    activeLink={search.get('brand')}
                />
                <StatusLabel
                    name="SD"
                    text={'SmackDown'}
                    href={'?brand=SD'}
                    activeLink={search.get('brand')}
                />
                <StatusLabel
                    name="AWL"
                    text={'AWL'}
                    href={'?brand=AWL'}
                    activeLink={search.get('brand')}
                />
            </StatusLabelContainer>

            <ConditionalLoading condition={!isLoading && wrestlers.length > 0} fallback={<ComponentSpinner />}>
                <div className="grid grid-three-column gap">
                    {wrestlers.map((wrestler, index) => {
                        return <RosterCard key={index} brand={wrestler.brand} name={wrestler.name} imgSrc={wrestler.image_name as string} imgAlt={wrestler.name} isLast={index === wrestlers.length - 1} newLimit={
                            setNewPage
                        } />;
                    })}
                </div>
            </ConditionalLoading>
        </>
    )
}
