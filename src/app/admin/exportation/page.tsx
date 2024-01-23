import { Boxed } from "@/components/Box/Boxed";
import Title from "@/components/Title";
import Link from "next/link";
import React from "react";
import ExportLink from "./ExportLink";

export default function AdminExportationPage() {
    return (
        <>
            <Title title={"Exportacion"} icon="cloud-download" />

            <Boxed w="100">
                <h4>
                    El archivo que se descarga de la tabla es un archivo JSON
                    con todos los datos de la tabla seleccionada
                </h4>

                <div className="down">
                    <p>Selecciona la tabla para exportar:</p>

                    <div className="down w1 flex column astart gap-small">
                        <ExportLink
                            text="Wrestlers"
                            endpoint="wrestlers"
                            working={true}
                        />
                        <ExportLink
                            text="Blog Posts"
                            endpoint="blog"
                            working={true}
                        />
                        <ExportLink
                            text="Users"
                            endpoint="users"
                            working={true}
                        />
                        <ExportLink
                            text="Equipos"
                            endpoint="teams"
                            working={true}
                        />
                        <ExportLink
                            text="Campeonatos"
                            endpoint="championships"
                            working={true}
                        />
                        <ExportLink
                            text="Reinados"
                            endpoint="championship/reigns"
                        />
                    </div>
                </div>
            </Boxed>
        </>
    );
}
