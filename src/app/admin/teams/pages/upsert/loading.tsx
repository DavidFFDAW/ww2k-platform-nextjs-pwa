import { Boxed } from "@/components/Box/Boxed";
import {
    CenteredSpinner,
    ComponentSpinner,
} from "@/components/Spinner/Spinner";
import React from "react";

export default function TeamsUpsertLoadingPage() {
    return (
        <>
            <div className="flex column gap wrestler-upsert-form space-down">
                <div className="grid two-column-grid responsive-grid gap">
                    <Boxed title={"Datos del equipo"} w={"100"}>
                        <div className="flex start column astart gap-small">
                            <ComponentSpinner />
                        </div>
                    </Boxed>
                    <Boxed w={"100"} title="Miembros" className="relative">
                        <CenteredSpinner />
                    </Boxed>
                </div>

                <Boxed title={"Datos de la marca"} w={"100"}>
                    <ComponentSpinner />
                </Boxed>
            </div>
        </>
    );
}
