export default function Input({ type, name, label, onChange, ...props }) {
    const hasLabel = Boolean(label);

    const input = (
        <input
            className="custom form-item"
            type={type}
            name={name}
            onChange={onChange}
            placeholder={props.placeholder || ''}
            autoComplete={props.autocomplete || 'off'}
        />
    );

    if (hasLabel) {
        return (
            <div className="form-group">
                <div className="form-label-container">
                    <label htmlFor={name} className="form-label">
                        {label}
                    </label>
                </div>
                <div className="form-input-container">{input}</div>
            </div>
        );
    }

    return <div className="form-input">{input}</div>;
}
