"use client";
import { ActionColors, ActionLink, ActionSubmit } from "@/modules/actions";
import ActionsContainer from "@/modules/actions/Actions";
import { Wrestler } from "@prisma/client";
import React from "react";

export default function WrestlerActions({ wrestler }: { wrestler: Wrestler }) {
    // const releaseOrHire = wrestler.status === 'ACTIVE' ? 'Release' : 'Hire';
    return (
        <>
            <ActionsContainer>
                <ActionLink
                    color={ActionColors.DEFAULT}
                    toHref={`/admin/wrestlers/pages/update/${wrestler.id}`}
                    icon="pencil-square"
                    text={`Editar ${wrestler.name}`}
                />
                <ActionLink
                    color={ActionColors.DEFAULT}
                    toHref="/admin/wrestlers/pages/create"
                    icon="plus"
                    text="Crear Wrestler"
                />
                <ActionLink
                    color={ActionColors.DEFAULT}
                    toHref="/admin/wrestlers/pages/bulk-update"
                    icon="collection"
                    text="Bulk update de wrestlers"
                />
                <ActionLink
                    color={ActionColors.DEFAULT}
                    toHref="/admin/wrestlers/pages/update/bulk"
                    icon="people"
                    text="Tabla de edición de wrestlers por grupos"
                />
                {/* <form action="" method="POST">
                    <ActionSubmit
                        color={ActionColors.WARNING}
                        icon="trash-fill"
                        text="Delete Wrestler"
                        name="wrestler_id"
                        value={wrestler.id.toString()}
                    />
                </form> */}
            </ActionsContainer>
        </>
    );
}
