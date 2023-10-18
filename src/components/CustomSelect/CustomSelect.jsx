import useCustomSelect from './useCustomSelect';
import CustomSelectList from './CustomSelectList';
import './customselect.css';

export default function CustomSelect({
    resultListHeight,
    zindex = 10,
    list,
    imageProp,
    nameProp,
    getIdCallback,
    value,
    deleteText,
}) {
    const { showList, search, searchResults, handleChangeSearch, handleSetShowList, handleSelect, setListVisible } =
        useCustomSelect(list, nameProp, imageProp, value, deleteText);

    const handleSelectCustom = getIdCallback
        ? item => {
              getIdCallback(item.id);
              handleSelect(item);
          }
        : handleSelect;

    const List = Boolean(showList) ? (
        <CustomSelectList
            select={handleSelectCustom}
            zindex={zindex}
            list={searchResults}
            image={imageProp}
            name={nameProp}
            height={resultListHeight}
        />
    ) : null;
    const taptap = !showList ? <i className="open-list-icon"></i> : <i className="close-list-icon"></i>;

    return (
        <>
            <section className="custom-select-container">
                <div className="custom-select flex start al-center">
                    <input
                        type="text"
                        className="input"
                        onChange={handleChangeSearch}
                        value={search}
                        onClick={setListVisible}
                    />
                    <button type="button" className="btn-list" onClick={handleSetShowList}>
                        {taptap}
                    </button>
                    {List}
                </div>
            </section>
        </>
    );
}
