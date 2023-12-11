import HttpService from '@/services/http.service';
import { Wrestler } from '@prisma/client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface RosterState {
    wrestlers: Wrestler[];
    isLoading: boolean;
    error: any;
    page: number;
}

export default function useRoster() {
    const search = useSearchParams();
    const brand = search.get('brand');
    const initialRosterState: RosterState = {
        wrestlers: [],
        isLoading: true,
        error: null,
        page: 1,
    };
    const [roster, setRoster] = useState(initialRosterState);


    useEffect(() => {
        HttpService.get('/api/wrestlers?page=' + roster.page + (brand ? '&brand=' + brand : '')).then(list => {
            setRoster(previous => ({
                ...previous,
                wrestlers: [...previous.wrestlers, ...list.content.wrestlers],
                isLoading: false,
            }));
        });
    }, [roster.page]);

    useEffect(() => {
        HttpService.get('/api/wrestlers?page=1' + (brand ? '&brand=' + brand : '')).then(list => {
            setRoster(previous => ({
                ...previous,
                wrestlers: [...list.content.wrestlers],
                isLoading: false,
            }));
        }).then(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }, [brand]);

    const setNewPage = () => {
        setRoster(previous => ({ ...previous, page: previous.page + 1 }));
    };

    return { ...roster, setRoster, setNewPage };
}
