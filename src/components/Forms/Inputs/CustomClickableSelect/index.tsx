"use client";
import Grid from "@/components/Layouts/Grid/Grid";
import { booleanToString } from "@/utilities/boolean.parse.utilility";
import React from "react";

interface List {
    value: string | number | boolean;
    label: string;
}

interface Props {
    label: string;
    name: string;
    columns: number;
    value?: string | number | boolean;
    required?: boolean;
    list: List[];
}

export default function CustomClickableSelect({
    label,
    name,
    columns,
    list,
    value = "",
    required = false,
}: Props) {
    const [selectedItem, setSelectedItem] = React.useState<
        string | number | boolean
    >(value);

    return (
        <div className="w1 custom-clickable-options-component flex column gap-small">
            <label className="label" htmlFor={name}>
                {label}
                {required ? <span className="required">*</span> : null}
            </label>

            <Grid columns={columns} gap={15} align="center" place="center">
                {list.map((item, index) => (
                    <div
                        key={index}
                        role="presentation"
                        className={`pointer clickable-option-select-item ${
                            selectedItem === item.value
                                ? "active clicked-selected-option"
                                : "inactive"
                        }`}
                        onClick={() => setSelectedItem(item.value)}
                    >
                        {item.label}
                    </div>
                ))}
            </Grid>

            <input
                type="hidden"
                name={name}
                value={booleanToString(selectedItem)}
                required={required}
            />
        </div>
    );
}
