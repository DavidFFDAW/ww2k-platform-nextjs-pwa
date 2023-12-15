import React from "react";

interface Props {
    name: string;
    image: string;
    selectedBrand: string;
    handleBrandChange: (newBrand: string) => void;
}

export default function BrandItem({
    name,
    image,
    selectedBrand,
    handleBrandChange,
}: Props) {
    const getSelectedClass = (brand: string) =>
        brand === selectedBrand ? " selected" : "";

    return (
        <div
            onClick={() => handleBrandChange(name)}
            className={
                `flex center acenter relative brand-select-item branded-${name}` +
                getSelectedClass(name)
            }
        >
            <div className="flex center acenter inner">
                <img
                    src={image}
                    className="total-image custom-image-brand-select"
                    alt=""
                />
            </div>
        </div>
    );
}
