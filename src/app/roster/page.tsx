import { Suspense } from "react";
import Title from "@/components/Title";
import StatusLabel, {
    StatusLabelContainer,
} from "@/components/Status/StatusLabel";
import { Input, SearchForm } from "@/components/Forms";
import { ButtonSecondary } from "@/components/Buttons/Buttons";
import { PageContext } from "@/shared/models";
import { Metadata } from "next";
import { getNamedTitle } from "@/utilities/metadatas.utility";
import RosterWrestlersList from "./components/RosterWrestlersList";
import RosterWrestlersListSkeleton from "./components/RosterWrestlersListSkeleton";
import "./roster.css";

export const metadata: Metadata = {
    title: getNamedTitle("Roster"),
};

export const revalidate = 0;

export default function RosterPage(context: PageContext) {
    const searchName = context.searchParams.search;
    const searchBrand = context.searchParams.brand;

    return (
        <>
            {/* Need to add an Skeleton to this page so it is loaded like it will be in the end */}
            <Title title="Roster" icon="list-ul" />

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

            <SearchForm url="/roster" className="down">
                <div className="w1 flex start gap-small">
                    {/* Need to change this search input to some fancy new one */}
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
                    <RosterWrestlersList searchParams={context.searchParams} />
                </Suspense>
            </div>
        </>
    );
}
