import { Team, Wrestler } from "@prisma/client";
import React from "react";
import TeamRosterItem from "./TeamRosterItem";
import { getTeamsWithMembers } from "@/queries/teams.queries";

export default async function ListOfTeams() {
    const teams = await getTeamsWithMembers();

    return (
        <div className="grid responsive-grid grid-three-column unconventional-grid gap">
            {teams.map((team) => (
                <TeamRosterItem
                    key={team.id}
                    team={team}
                    members={team.WrestlerTeam}
                />
            ))}
        </div>
    );
}
