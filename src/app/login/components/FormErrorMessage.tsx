import React from 'react'

interface FormErrorMessageProps {
    message: string;
    setError: React.Dispatch<React.SetStateAction<any>>;
}

export function FormErrorMessage({ message, setError }: FormErrorMessageProps) {

    const setErrorEmpty = () => setError((previous: any) => ({ ...previous, error: '' }));

    return (
        <div className="flex between appear form-error-text">
            {message}
            <button className="nobtn" onClick={setErrorEmpty}>&times;</button>
        </div>
    )
}