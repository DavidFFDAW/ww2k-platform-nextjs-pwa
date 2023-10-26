import { prisma } from '@/db/conn'
import Title from '@/components/Title';
import CustomSelect from '@/components/CustomSelect/CustomSelect';

function getTeams() {
    return prisma.team.findMany({
        orderBy: {
            name: 'asc'
        },
    });
}
function getWrestlers() {
    return prisma.wrestler.findMany({
        orderBy: {
            name: 'asc'
        },
    });
}

export default async function AdminTeamsCreatePage() {
    const teams = await getTeams();
    const wrestlers = await getWrestlers();

    return (
        <>
            <Title title="Teams" icon='people-fill' />

            <div className='w1'>
                {teams.map((team) => {
                    return (<div key={team.id} className='w1 flex row acenter start gap'>
                        <p style={{ width: 20 }}>{team.id}</p>
                        <h4 style={{ width: 250 }}>
                            {team.name}
                        </h4>
                    </div>);
                })}
            </div>
        </>
}