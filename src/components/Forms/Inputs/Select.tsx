interface SelectProps {
    label: string;
    name: string;
    value?: string;
    required?: boolean;
    children: React.ReactNode;
}

export function InputSelect({
    children,
    label,
    name,
    value = "",
    required = false,
}: SelectProps) {
    return (
        <div className="w1 flex column gap-5">
            <label className="label">
                {label}
                {required ? <span className="required">*</span> : null}
            </label>

            <div className="input-wrapper-container-div relative">
                <select
                    className="w1 custom"
                    name={name}
                    defaultValue={value}
                    required={required}
                >
                    {children}
                </select>
            </div>
        </div>
    );
}
