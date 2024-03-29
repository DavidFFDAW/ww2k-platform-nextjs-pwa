"use client";

interface InputProps {
    label: string;
}

export function InputSkeleton({ label }: InputProps) {
    return (
        <div className="w1 flex column gap-5">
            <label className="label" htmlFor={"skeleton-input"}>
                {label}
            </label>
            <div className="input-wrapper-container-div relative">
                <input
                    className="w1 skeleton-loading"
                    type={"text"}
                    disabled={true}
                    readOnly={true}
                    name="skeleton-input"
                />
            </div>
        </div>
    );
}
