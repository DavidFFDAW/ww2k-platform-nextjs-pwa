import { prisma } from '@/db/conn'
import Title from '@/components/Title';
import { TableContainer } from '@/modules/tables';
import TableItem, { TableRow } from '@/modules/tables/components/TableRows';
import CreateButton from '@/components/Buttons/CreateButton';
import TeamActions from './TeamActions';

function getTeams() {
    return prisma.team.findMany({
        orderBy: {
            name: 'asc'
        },
        include: {
            WrestlerTeam: {
                include: {
                    Team: true,
                    Wrestler: true,
                }
            }
        },
    });
}

export default async function AdminTeamsPage() {
    const teams = await getTeams();

    return (
        <>
            <Title title="Teams" icon='people-fill' />

            <TableContainer>
                {teams.map((team) => {
                    return (
                        <TableRow key={team.id}>
                            <TableItem width={10} align="start">
                                {team.id}
                            </TableItem>
                            <TableItem width={80} align="start">
                                {team.name}
                            </TableItem>
                            <TableItem width={10} align="start">
                                <TeamActions team={team} />
                            </TableItem>
                        </TableRow>
                    );
                })}
            </TableContainer>

            <CreateButton endpoint='teams/create' />
        </>
    );
}