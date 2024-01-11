"use client";
import { BootstrapIcon } from "@/components/Icon/BootstrapIcon";
import React from "react";

interface InputProps {
    type?: string;
    max?: number;
    label: string;
    name: string;
    value?: string | number | undefined | null;
    placeholder?: string;
    required?: boolean;
}

export function NumberInput({
    max = 100,
    label,
    name,
    value = 0,
    placeholder = "3141595",
    required = false,
}: InputProps) {
    const [number, setNumber] = React.useState<number>(Number(value));

    const substractNumber = () => {
        if (number > 0) {
            setNumber(previous => previous - 1);
        }
    };

    const addNumber = () => {
        setNumber(previous => previous + 1);
    };

    return (
        <div className="w1 flex column gap-5">
            <label className="label" htmlFor={name}>
                {label}
                {required ? <span className="required">*</span> : null}
            </label>

            <div className="w1 flex acenter numeric-input numeric-input-wrapper-container-div relative">
                <button className="btn-list" type="button" onClick={substractNumber}>
                    <BootstrapIcon icon="dash-circle" />
                </button>

                <div className="w1 input-wrapper-container-div relative">
                    <input
                        className="w1"
                        maxLength={max}
                        type={"number"}
                        inputMode="numeric"
                        name={name}
                        required={required}
                        defaultValue={number}
                        placeholder={placeholder}
                    />
                </div>

                <button className="btn-list" type="button" onClick={addNumber}>
                    <BootstrapIcon icon="plus-circle" />
                </button>
            </div>

        </div>
    );
}
