"use client";
import React from "react";
import "./brand.select.css";
import BrandItem from "./BrandItem";

interface Props {
    label: string;
    name: string;
    value?: string;
    required?: boolean;
}

export default function BrandSelect({
    label,
    name,
    value = "",
    required = false,
}: Props) {
    const [selectedBrand, setSelectedBrand] = React.useState<string>(value);

    const handleBrandChange = (newBrand: string) => {
        setSelectedBrand((pr) => newBrand);
    };

    return (
        <div className="w1 brand-select-input-component flex column gap-5">
            <label className="label" htmlFor={name}>
                {label}
                {required ? <span className="required">*</span> : null}
            </label>

            <div className="w1 grid three-column-grid gap-small brand-select-grid grid-responsive">
                <BrandItem
                    name="RAW"
                    image="/raw-logo.webp"
                    selectedBrand={selectedBrand}
                    handleBrandChange={handleBrandChange}
                />

                <BrandItem
                    name="SD"
                    image="/smackdown-logo.webp"
                    selectedBrand={selectedBrand}
                    handleBrandChange={handleBrandChange}
                />

                <BrandItem
                    name="AWL"
                    image="/images/awl-logo.webp"
                    selectedBrand={selectedBrand}
                    handleBrandChange={handleBrandChange}
                />
            </div>

            <input
                type="hidden"
                name={name}
                value={selectedBrand}
                required={required}
            />
        </div>
    );
}
