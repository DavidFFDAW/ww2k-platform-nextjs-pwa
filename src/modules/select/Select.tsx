"use client";
import React from "react";
import { NullableLoading } from "@/components/Loading";
import useSelect from "./useSelect";
import "./customselect.css";
import { BootstrapIcon } from "@/components/Icon/BootstrapIcon";
import LazyImage from "@/components/Image/LazyImage";

interface SelectProps {
    list: any[];
    name: string;
    zIndex?: number;
    label?: string;
    required?: boolean;
    placeholder?: string;
    listHeight?: number;
    removeText?: boolean;
    selectCallback?: (selected: any) => void;
}

export default function Select({
    list,
    name,
    zIndex,
    label,
    required,
    listHeight,
    placeholder = "Buscar...",
    removeText = false,
    selectCallback,
}: SelectProps) {
    const {
        search,
        showList,
        selectList,
        selectedItem,
        toggleList,
        handleChangeSearch,
        selectItemFromList,
        removeSearchText,
    } = useSelect({ givenList: list, selectCallback, removeText });

    const resultListStyle: React.CSSProperties = {
        zIndex: zIndex || 0,
        maxHeight: listHeight || 200,
    };

    return (
        <section className="custom-select-container">
            <NullableLoading condition={Boolean(label)}>
                <label className="label" htmlFor={name}>
                    {label}
                    {required ? <span className="required">*</span> : null}
                </label>
            </NullableLoading>

            <div className="custom-select flex start acenter">
                <input
                    type="text"
                    className="input"
                    onChange={handleChangeSearch}
                    value={search}
                    placeholder={placeholder}
                    onClick={toggleList}
                />
                {selectedItem ? (
                    <input type="hidden" name={name} value={selectedItem.id} />
                ) : null}
                <button
                    type="button"
                    className="btn-list"
                    onClick={removeSearchText}
                >
                    <BootstrapIcon icon={"x-circle"} />
                </button>
                <button
                    type="button"
                    className="btn-list last"
                    onClick={toggleList}
                >
                    {showList ? "▲" : "▼"}
                </button>
                <NullableLoading condition={showList}>
                    <div
                        className="custom-select-result-listing"
                        style={resultListStyle}
                    >
                        {selectList.map((item, index) => {
                            const img = item.image || "/noimage.jpg";

                            return (
                                <div
                                    key={index}
                                    className="custom-select-result pointer"
                                    onClick={selectItemFromList(item)}
                                >
                                    <div className="custom-select-result-image flex start acenter gap-small">
                                        {/* <div className="backgroundimg" style={{ backgroundImage: `url(${img})` }}></div> */}
                                        <LazyImage
                                            width={50}
                                            height={50}
                                            imgClassName="backgroundimg"
                                            src={img}
                                            alt={item.name}
                                        />
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </NullableLoading>
            </div>
        </section>
    );
}
