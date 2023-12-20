import "./toggle.css";

interface ToggleProps {
    name: string;
    checked?: boolean;
    label: string;
}

export function ToggleInput({ name, checked = false, label }: ToggleProps) {
    return (
        <div className="custom-toggle-switch flex column center acenter">
            <label className="form-label block" htmlFor={name}>
                {label}
            </label>
            <label className="switch block" htmlFor={undefined}>
                <input
                    type="checkbox"
                    name={name}
                    defaultChecked={checked || false}
                />
                <span className="slider round"></span>
            </label>
        </div>
    );
}
