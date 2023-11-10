import React from 'react'

interface ListType {
    id: number;
    name: string;
    image: string;
}

interface ISelectState {
    list: ListType[];
    showList: boolean;
    search: string;
    selectedItem: any;
}

export default function useSelect(givenList: ListType[], selectCallback?: (item: any) => void) {
    const [state, setState] = React.useState<ISelectState>({
        list: givenList,
        showList: false,
        search: '',
        selectedItem: null,
    });

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputVal = e.target.value;
        const filteredList = givenList.filter(item => item.name.toLowerCase().includes(inputVal.toLowerCase()));
        setState((prev: ISelectState) => ({ ...prev, search: inputVal, list: filteredList }));
    };

    return {
        selectList: state.list,
        showList: state.showList,
        search: state.search,
        selectedItem: state.selectedItem,
        toggleList: () => setState((prev: ISelectState) => ({ ...prev, showList: !prev.showList })),
        handleChangeSearch,
        selectItemFromList: (item: any) => () => {
            if (selectCallback) selectCallback(item);
            setState((prev: ISelectState) => ({
                ...prev,
                search: item.name,
                showList: false,
                selectedItem: item
            }));
        }
    }
}
