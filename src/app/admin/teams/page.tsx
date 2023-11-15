import { prisma } from "@/db/conn";
import Title from "@/components/Title";
import { TableContainer } from "@/modules/tables";
import TableItem, { TableRow } from "@/modules/tables/components/TableRows";
import CreateButton from "@/components/Buttons/CreateButton";
import TeamActions from "./TeamActions";
import { BootstrapIcon } from "@/components/Icon/BootstrapIcon";

function getTeams() {
    return prisma.team.findMany({
        orderBy: {
            name: "asc",
        },
        include: {
            ChampionshipReign: true,
            WrestlerTeam: {
                include: {
                    Wrestler: true,
                },
            },
        },
    });
}

export const revalidate = 0;

export default async function AdminTeamsPage() {
    const teams = await getTeams();

    return (
        <>
            <Title title="Teams" icon="people-fill" />

            <TableContainer>
                {teams.map((team) => {
                    return (
                        <TableRow key={team.id}>
                            {/* <TableItem width={10} align="start">
                                {team.id}
                            </TableItem> */}
                            <TableItem width={90} align="start">
                                <div className="flex start acenter gap-small">
                                    {team.ChampionshipReign.length > 0 ? (
                                        <span className="badge optional">
                                            <BootstrapIcon icon="trophy" />
                                        </span>
                                    ) : null}
                                    <p>{team.name}</p>
                                </div>
                            </TableItem>
                            <TableItem width={90} align="start">
                                <div className="flex start column astart gap-small">
                                    {team.WrestlerTeam.map((wt) => {
                                        return (
                                            <p key={wt.wrestler_id}>
                                                {wt.Wrestler.name}
                                            </p>
                                        );
                                    })}
                                </div>
                            </TableItem>
                            <TableItem width={10} align="center">
                                <TeamActions team={team} />
                            </TableItem>
                        </TableRow>
                    );
                })}
            </TableContainer>

            <CreateButton endpoint="teams/create" />
        </>
    );
}
