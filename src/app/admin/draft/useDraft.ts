import { Wrestler } from '@prisma/client';
import { useState } from 'react'

interface DraftStore {
    draftWrestlers: Wrestler[];
    userSelection: Wrestler[];
    raw: Wrestler[];
    smackdown: Wrestler[];
}

export default function useDraft(wrestlers: Wrestler[]) {
    const [state, setState] = useState<DraftStore>({
        draftWrestlers: wrestlers,
        userSelection: [],
        raw: [],
        smackdown: [],
    });

    const handleFormSubmition = (datas: any) => {
        const selectedID = Number(datas.selected_wrestler);
        const selectedWrestler = wrestlers.find((wrestler) => wrestler.id === selectedID);
        const foundInSelection = state.userSelection.find((wrestler) => wrestler.id === selectedID);

        if (!selectedWrestler || foundInSelection) return;
        const listAfterSelection = state.draftWrestlers.filter((wrestler) => wrestler.id !== selectedID);
        const rawBrandSelection = chooseRawWrestler(selectedWrestler, listAfterSelection);

        setState((prev: DraftStore) => {
            return {
                ...prev,
                draftWrestlers: prev.draftWrestlers.filter((wrestler: Wrestler) => wrestler.id !== selectedID),
                // userSelection: [...prev.userSelection, selectedWrestler],
                raw: rawBrandSelection ? [...prev.raw, rawBrandSelection] : [...prev.raw],
                smackdown: [...prev.smackdown, selectedWrestler],
            };
        });
    }

    const chooseRawWrestler = (smackdownPick: Wrestler, listAfterSmackdownPick: Wrestler[]) => {
        if (listAfterSmackdownPick.length <= 0) {
            return false;
        }
        const genderList = listAfterSmackdownPick.filter((it) => it.sex === smackdownPick.sex);
        const finalGender = genderList.length <= 0 ? listAfterSmackdownPick : genderList;
        const overallList = finalGender.filter((it) => it.overall >= smackdownPick.overall - 5 && it.overall <= smackdownPick.overall + 5);
        const finalList = overallList.length <= 0 ? finalGender : overallList;

        const random = Math.floor(Math.random() * finalList.length);
        const selectedWrestler = finalList[random];

        return selectedWrestler;
    };

    return {
        draftWrestlers: state.draftWrestlers,
        userSelection: state.userSelection,
        smackdown: state.smackdown,
        raw: state.raw,
        handleFormSubmition,
    }
}
