interface CheckboxProps {
    label: string;
    name: string;
    checked?: boolean;
}

export function CheckboxInput({ label, name, checked = false }: CheckboxProps) {
    return (
        <div className="w1">
            <label className="flex gap-5">
                <input type="checkbox" name={name} defaultChecked={checked} />
                {label}
            </label>
        </div>
    );
}
