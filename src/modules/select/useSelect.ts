import React from "react";

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

interface useSelectParameters {
    givenList: ListType[];
    removeText: boolean;
    selectCallback?: (item: any) => void;
}

export default function useSelect({
    givenList,
    removeText,
    selectCallback = (item) => {},
}: useSelectParameters) {
    const [state, setState] = React.useState<ISelectState>({
        list: givenList,
        showList: false,
        search: "",
        selectedItem: null,
    });

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputVal = e.target.value;
        const filteredList =
            state.search.length <= 0
                ? givenList
                : givenList.filter((item) =>
                      item.name.toLowerCase().includes(inputVal.toLowerCase())
                  );
        setState((prev: ISelectState) => ({
            ...prev,
            showList: true,
            search: inputVal,
            list: filteredList,
        }));
    };

    return {
        selectList: state.list,
        showList: state.showList,
        search: state.search,
        selectedItem: state.selectedItem,
        toggleList: () =>
            setState((prev: ISelectState) => ({
                ...prev,
                showList: !prev.showList,
            })),
        handleChangeSearch,
        selectItemFromList: (item: any) => () => {
            if (selectCallback) selectCallback(item);
            setState((prev: ISelectState) => ({
                ...prev,
                list: givenList.filter((i) => i.id !== item.id),
                search: item.name,
                showList: false,
                selectedItem: item,
            }));
        },
        removeSearchText: () => {
            setState((prev: ISelectState) => ({
                ...prev,
                showList: false,
                search: "",
            }));
        },
    };
}
