interface DateProps {
    min?: string;
    max?: string;
    label: string;
    name: string;
    required?: boolean;
    value?: string;
    onChangeDate?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export function InputDate({
    min = "2020-01-01",
    max = "2030-12-31",
    label,
    name,
    required = false,
    onChangeDate,
    value = new Date().toISOString().split("T")[0],
}: DateProps) {
    return (
        <div className="w1 flex column gap-5">
            <label className="label" htmlFor={name}>
                {label}
                {required ? <span className="required">*</span> : null}
            </label>
            <input
                min={min}
                max={max}
                className="w1 date-input"
                type="date"
                name={name}
                required={required}
                defaultValue={
                    !value ? new Date().toISOString().split("T")[0] : value
                }
                {...(onChangeDate && { onChange: onChangeDate })}
            />
        </div>
    );
}
