"use client";

import { useEffect, useState } from "react";

interface InputProps {
    type?: string;
    max?: number;
    label: string;
    name: string;
    value?: string;
    placeholder?: string;
    required?: boolean;
}

export function OnChangeInput({
    type,
    max = 100,
    label,
    name,
    value = "",
    placeholder = "Default placeholder",
    required = false,
}: InputProps) {
    const [inputValue, setInputValue] = useState(value);
    useEffect(() => {
        setInputValue(value);
    }, [value]);

    return (
        <div className="w1 flex column gap-5">
            <label className="label" htmlFor={name}>
                {label}
                {required ? <span className="required">*</span> : null}
            </label>
            <div className="input-wrapper-container-div relative">
                <input
                    className="w1"
                    maxLength={max}
                    type={type || "text"}
                    name={name}
                    required={required}
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}