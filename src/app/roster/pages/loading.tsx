import React from 'react'
import { ButtonSecondary } from '@/components/Buttons/Buttons'
import { SearchForm } from '@/components/Forms'
import StatusLabel, { StatusLabelContainer } from '@/components/Status/StatusLabel'
import Title from '@/components/Title'
import RosterWrestlersListSkeleton from '../components/RosterWrestlersListSkeleton'

export default function RosterPageLoading() {
    return (
        <>
            <Title title="Roster" icon="list-ul" />

            <StatusLabelContainer fixed={true}>
                <StatusLabel
                    name="all"
                    text={"Todos"}
                    href={"?"}
                    activeLink={''}
                />
                <StatusLabel
                    name="RAW"
                    text={"RAW"}
                    href={"?brand=RAW"}
                    activeLink={''}
                />
                <StatusLabel
                    name="SD"
                    text={"SmackDown"}
                    href={"?brand=SD"}
                    activeLink={''}
                />
                <StatusLabel
                    name="AWL"
                    text={"AWL"}
                    href={"?brand=AWL"}
                    activeLink={''}
                />
            </StatusLabelContainer>

            <SearchForm url="/roster">
                <div className="w1 flex start gap-small">
                    {/* Need to change this search input to some fancy new one */}
                    <input
                        type="search"
                        name="search"
                        placeholder="Buscar..."
                        defaultValue={''}
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
                <RosterWrestlersListSkeleton />
            </div>

        </>
    )
}
