import { Wrestler } from '@prisma/client';
import { useState } from 'react'

interface DraftStore {
    draftWrestlers: Wrestler[];
    userSelection: Wrestler[];
}

export default function useDraft(wrestlers: Wrestler[]) {
    const [state, setState] = useState<DraftStore>({
        draftWrestlers: wrestlers,
        userSelection: [],
    });

    const handleFormSubmition = (datas: any) => {
        const selectedID = Number(datas.selected_wrestler);
        const selectedWrestler = wrestlers.find((wrestler) => wrestler.id === selectedID);
        const foundInSelection = state.userSelection.find((wrestler) => wrestler.id === selectedID);

        if (!selectedWrestler || foundInSelection) return;

        setState((prev: DraftStore) => {
            return {
                ...prev,
                draftWrestlers: prev.draftWrestlers.filter((wrestler: Wrestler) => wrestler.id !== selectedID),
                userSelection: [...prev.userSelection, selectedWrestler],
            };
        });
    }

    return {
        draftWrestlers: state.draftWrestlers,
        userSelection: state.userSelection,
        handleFormSubmition,
    }
}
