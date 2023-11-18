"use client";
interface InputProps {
    type?: string;
    max?: number;
    label: string;
    name: string;
    value?: string;
    placeholder?: string;
    required?: boolean;
}

export function Input({
    type,
    max = 100,
    label,
    name,
    value = "",
    placeholder = "Default placeholder",
    required = false,
}: InputProps) {
    return (
        <div className="w1 flex column gap-5">
            <label className="label">
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
                    defaultValue={value ? value : ""}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}
