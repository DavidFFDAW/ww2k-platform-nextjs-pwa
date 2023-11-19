"use client";
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
    value = "",
    placeholder = "3141595",
    required = false,
}: InputProps) {
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
                    type={"number"}
                    inputMode="numeric"
                    name={name}
                    required={required}
                    defaultValue={value ? Number(value) : ""}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}
