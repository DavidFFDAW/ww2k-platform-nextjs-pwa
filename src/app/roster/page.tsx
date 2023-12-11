"use client";
import * as React from "react";
import useRoster from "./useRoster";
import Title from "@/components/Title";
import { ConditionalLoading } from "@/components/Loading";
import { ComponentSpinner } from "@/components/Spinner/Spinner";
import RosterCard from "./RosterCard";
import StatusLabel, { StatusLabelContainer } from "@/components/Status/StatusLabel";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/Forms";
import { ButtonCTA } from "@/components/Buttons/Buttons";
import './roster.css';

export default function RosterPage() {
    const search = useSearchParams();
    const { wrestlers, isLoading, setNewPage } = useRoster();

    return (
        <>
            <Title title="Roster" icon="list-ul" />

            <StatusLabelContainer fixed={true}>
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

            <form action="" method="GET">
                <div className="w1 flex start">
                    <Input label="Buscador" name="search" placeholder="Buscar" type="search" />
                </div>
                <ButtonCTA type="submit" className="ml-2" text="Buscar" />
            </form>


            <ConditionalLoading condition={!isLoading && wrestlers.length > 0} fallback={<ComponentSpinner />}>
                <div style={{ marginTop: 80 }} className="grid responsive-grid grid-three-column unconventional-grid gap">
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
