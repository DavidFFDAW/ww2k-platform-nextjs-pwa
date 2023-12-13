"use client";
import Actions from "@/modules/actions/Actions";
import { Wrestler } from "@prisma/client";
import React from "react";

export default function WrestlerActions({ wrestler }: { wrestler: Wrestler }) {
    // const releaseOrHire = wrestler.status === 'ACTIVE' ? 'Release' : 'Hire';
    return (
        <>
            <Actions.Container>
                <Actions.Link
                    color={Actions.Colors.DEFAULT}
                    toHref={`/admin/wrestlers/update/${wrestler.id}`}
                    icon="pencil-square"
                    text={`Editar ${wrestler.name}`}
                />
                <Actions.Link
                    color={Actions.Colors.DEFAULT}
                    toHref="/admin/wrestlers/create"
                    icon="plus"
                    text="Crear Wrestler"
                />
                <Actions.Link
                    color={Actions.Colors.DEFAULT}
                    toHref="/admin/wrestlers/bulk-update"
                    icon="collection"
                    text="Actualizar conjuntos"
                />
                <form action="" method="POST">
                    <Actions.Submit
                        color={Actions.Colors.WARNING}
                        icon="trash-fill"
                        text="Delete Wrestler"
                        name="wrestler_id"
                        value={wrestler.id.toString()}
                    />
                </form>
            </Actions.Container>
        </>
    );
}
