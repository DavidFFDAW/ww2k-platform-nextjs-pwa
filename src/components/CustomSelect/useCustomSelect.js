import { useEffect, useState } from 'react';

export default function useCustomSelect(list, nameProp, imageProp, value, deleteText) {
    const state = {
        id: '',
        search: '',
        searchResults: list,
        showList: false,
    };
    const [selectState, setSelectState] = useState(state);

    useEffect(
        _ => {
            const callback = previous => ({ ...previous, searchResults: list });
            setSelectState(callback);
        },
        [list],
    );

    useEffect(
        _ => {
            const callback = previous => ({ ...previous, search: deleteText ? '' : previous.search });
            setSelectState(callback);
        },
        [deleteText],
    );

    const setListVisible = () => {
        const callback = previous => ({ ...previous, showList: !previous.showList });
        setSelectState(callback);
    };

    const handleChangeSearch = e => {
        const inputVal = e.target.value;
        const filteredList = list.filter(item => item[nameProp].toLowerCase().includes(inputVal.toLowerCase()));
        const callback = previous => ({ ...previous, search: inputVal, searchResults: filteredList, showList: true });
        setSelectState(callback);
    };

    const handleSelect = item => {
        const name = item[nameProp] || item.name || '';
        console.log({ name });
        const callback = previous => ({ ...previous, id: item.id, search: name, showList: false });
        setSelectState(callback);
    };

    const handleSetShowList = _ => {
        const callback = previous => ({ ...previous, showList: !previous.showList });
        setSelectState(callback);
    };

    const setByValue = id => {
        const item = list.find(item => item.id === id);
        const name = item[nameProp] || item.name || '';
        const callback = previous => ({ ...previous, id, search: name, showList: false });
        setSelectState(callback);
    };

    useEffect(
        _ => {
            if (Boolean(value)) {
                setByValue(value);
            }
        },
        [value],
    );

    return {
        showList: selectState.showList,
        search: selectState.search,
        searchResults: selectState.searchResults,
        setByValue,
        handleChangeSearch,
        handleSetShowList,
        handleSelect,
        setListVisible,
    };
}
