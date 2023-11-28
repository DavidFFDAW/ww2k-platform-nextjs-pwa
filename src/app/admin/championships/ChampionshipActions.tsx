"use client";
import Actions from "@/modules/actions/Actions";
import { Championship } from "@prisma/client";
import React from "react";

interface Props {
    championship: Championship
}

export default function ChampionshipActions({
    championship,
}: Props) {
    return (
        <>
            <Actions.Container>
                <Actions.Fetch
                    href={`/api/championships/delete/${championship.id}`}
                    text="Borrar championship y reinados"
                    icon="trash-fill"
                    color={Actions.Colors.DELETE}
                    method="delete"
                    refresh={true}
                />
            </Actions.Container>
        </>
    );
}
