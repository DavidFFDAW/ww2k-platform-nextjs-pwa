import "./toggle.css";

interface ToggleProps {
    name: string;
    checked?: boolean;
    label: string;
}

export function ToggleInput({ name, checked = false, label }: ToggleProps) {
    return (
        <div className="custom-toggle-switch flex column center al-center">
            <label className="form-label block">{label}</label>
            <label className="switch block">
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
