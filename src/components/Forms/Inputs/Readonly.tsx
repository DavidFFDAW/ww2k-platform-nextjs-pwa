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

export default function ReadonlyInput({
    label,
    name,
    required,
    value,
    placeholder,
}: InputProps) {
    return (
        <>
            <div className="w1 flex column gap-5">
                <label className="label" htmlFor={name}>
                    {label}
                    {required ? <span className="required">*</span> : null}
                </label>

                <div className="w1 flex acenter numeric-input numeric-input-wrapper-container-div relative">
                    <div className="w1 input-wrapper-container-div relative">
                        <input
                            className="w1 readonly-input"
                            name={name}
                            required={required}
                            defaultValue={value?.toString()}
                            placeholder={placeholder}
                            readOnly={true}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
