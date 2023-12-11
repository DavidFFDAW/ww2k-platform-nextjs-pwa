import HttpService from '@/services/http.service';
import { Wrestler } from '@prisma/client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface RosterState {
    wrestlers: Wrestler[];
    isLoading: boolean;
    error: any;
}

export default function useRoster() {
    const search = useSearchParams();
    const brand = search.get('brand');
    const initialRosterState: RosterState = {
        wrestlers: [],
        isLoading: true,
        error: null,
    };
    const [roster, setRoster] = useState(initialRosterState);


    useEffect(() => {
        console.log('useRoster:useEffect');

        HttpService.get('/api/wrestlers?brand=' + (brand || '')).then(list => {
            setRoster(previous => ({
                ...previous,
                wrestlers: [...list.content.wrestlers],
                isLoading: false,
            }));
        }).then(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }, [brand]);


    return { ...roster, setRoster };
}
