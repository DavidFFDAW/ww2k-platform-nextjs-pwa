"use client";
import { deleteTeam } from "@/actions/team.actions";
import Actions from "@/modules/actions/Actions";
import { ChampionshipReign, Team } from "@prisma/client";
import React from "react";

export default function TeamActions({
    team,
}: {
    team: Team & { ChampionshipReign: ChampionshipReign[] };
}) {
    return (
        <div className="actions-grouped-container">
            <Actions.Container>
                <Actions.Link
                    text={`Editar equipo '${team.name}'`}
                    color={Actions.Colors.DEFAULT}
                    toHref={`/admin/teams/update/${team.id}`}
                    icon={"pencil-square"}
                />
                <Actions.Link
                    text={"Crear nuevo equipo"}
                    color={Actions.Colors.DEFAULT}
                    toHref={"/admin/teams/create"}
                    icon={"plus-circle"}
                />
                {team.ChampionshipReign.length <= 0 ? (
                    <form action={deleteTeam} className="w1 form-delete">
                        <Actions.Submit
                            text={`Borrar equipo '${team.name}'`}
                            color={Actions.Colors.DELETE}
                            icon={"trash-fill"}
                            name="team_id"
                            value={team.id.toString()}
                        />
                    </form>
                ) : null}
            </Actions.Container>
        </div>
    );
}
