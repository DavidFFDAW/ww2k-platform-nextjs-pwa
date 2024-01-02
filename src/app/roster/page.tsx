import Title from '@/components/Title';
import { Metadata } from 'next';
import { getNamedTitle } from '@/utilities/metadatas.utility';
import Link from 'next/link';

export const metadata: Metadata = {
    title: getNamedTitle('Roster'),
};
export const revalidate = 0;

export default function RosterPage() {
    
    return (
        <>
            <Title title="Roster" icon="list-ul" />

            <div className='flex center acenter gap'>
                <Link className="possible-state-item label" href="/roster/pages/individual">
                    Individual
                </Link>

                <Link className="possible-state-item label" href="/roster/pages/teams">
                    Equipos
                </Link>
            </div>
        </>
    );
}
