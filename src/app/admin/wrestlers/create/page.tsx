'use client';
import React from "react";
import useCreateWrestler from "./hooks/useCreateWrestler";
import UpsertDatas, { UpsertDatasState, UpsertImages, UpsertTwitter } from '../components/UpsertLayouts';
import { ButtonCTA } from "@/components/Buttons/Buttons";

export default function WrestlerCreatePage() {
    const { handleFormSubmit } = useCreateWrestler();

    return (
        <form action="POST" className="grid two-column-grid astart responsive-grid gap wrestler-upsert-form" onSubmit={handleFormSubmit}>
            <div className="w1 boxed">
                <h2 className="space-down">Datos Generales</h2>
                <UpsertDatas />
            </div>

            <div className="w1 boxed">
                <h2 className="space-down">Datos de Estado</h2>
                <UpsertDatasState />
            </div>

            <div className="w1 boxed">
                <h2 className="space-down">Datos de Twitter</h2>
                <UpsertTwitter />
            </div>

            <div className="w1 boxed desktop-mt-72">
                <h2 className="space-down">Imágenes</h2>
                <UpsertImages />
            </div>

            <div className="fixed-button">
                <ButtonCTA type={"submit"} text={"Guardar cambios"} />
            </div>
        </form>
    );
}
