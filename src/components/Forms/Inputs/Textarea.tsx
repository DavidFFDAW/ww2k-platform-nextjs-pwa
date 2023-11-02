interface TextAreaProps {
    label: string;
    name: string;
    value?: string;
    required?: boolean;
    rows?: number;
}

export function Textarea({ label, name, value = '', required = false, rows = 5 }: TextAreaProps) {
    return (
        <div className="w1 flex column gap-5">
            <label className="label">{label}</label>
            <textarea className="w1 custom input" name={name} rows={rows} defaultValue={value} required={required} />
        </div>
    );
}