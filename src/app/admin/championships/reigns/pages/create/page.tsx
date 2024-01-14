import { Boxed } from "@/components/Box/Boxed";
import { ButtonCTA } from "@/components/Buttons/Buttons";
import { Form, InputDate, ToggleInput } from "@/components/Forms";
import { NumberInput } from "@/components/Forms/Inputs/Number";
import Title from "@/components/Title";
import { getActiveChampionships } from "@/queries/championships.queries";
import { getTeamsWithMembers } from "@/queries/teams.queries";
import { getAllWrestlers } from "@/queries/wrestler.queries";
import { getNamedTitle } from "@/utilities/metadatas.utility";
import { Metadata } from "next";
import React from "react";
import ChampionshipReignSelect from "../../components/ChampionshipReignSelect";
import ReadonlyInput from "@/components/Forms/Inputs/Readonly";
import ReignsDatesDataFields from "../../components/ReignsDatesDataFields";

export const revalidate = 0;
export const metadata: Metadata = {
    title: getNamedTitle("Crear nuevo reinado"),
    description: "Create a championship reign",
};

export default async function AdminChampionshipReignCreatePage() {
    const [wrestlers, championships, teams] = await Promise.all([
        getAllWrestlers(),
        getActiveChampionships(),
        getTeamsWithMembers(),
    ]);

    return (
        <>
            <Title title="Crear un reinado" icon="trophy-fill" />

            <Form
                method="POST"
                action="/api/championships/reigns/create"
                className="grid one-column-grid astart place-items-normal responsive-grid gap reigns-upsert-form"
                redirect="/admin/championships/reigns"
                sendHttp={true}
            >
                <Boxed w="100" title="Luchador y título">
                    <div className="grid two-column-grid astart place-items-normal gap-small grid-responsive">
                        <ChampionshipReignSelect
                            wrestlers={wrestlers}
                            championships={championships}
                            teams={teams}
                        />
                    </div>
                </Boxed>

                <Boxed w="100" title="Días del reinado">
                    <div className="flex column gap">
                        <ReignsDatesDataFields />
                    </div>
                </Boxed>

                <div className="fixed-button">
                    <ButtonCTA type={"submit"} text={"Guardar cambios"} />
                </div>
            </Form>
        </>
    );
}
