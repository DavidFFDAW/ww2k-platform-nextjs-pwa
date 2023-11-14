'use client';
interface InputProps {
    max?: number;
    name: string;
    value: any;
    placeholder?: string;
    required?: boolean;
}

export function HiddenInput({
    max = 100,
    name,
    value = '',
    placeholder = 'Default placeholder',
    required = false,
}: InputProps) {
    return (
        <input
            className="w1"
            maxLength={max}
            type={'hidden'}
            name={name}
            required={required}
            defaultValue={value}
            placeholder={placeholder}
            alt="hidden form input"
            about="hidden form input"
        />
    );
}
