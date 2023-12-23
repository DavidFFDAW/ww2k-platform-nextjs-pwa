import React from "react";

interface Props {
    value: string;
    label: string;
    handleStatusChange: (newStatus: string) => () => void;
    selectedStatus: string;
}

export default function WrestlerStatusItem({
    value,
    label,
    handleStatusChange,
    selectedStatus,
}: Props) {
    return (
        <div
            className={`pointer clickable-option-select-item ${
                selectedStatus === value
                    ? "active clicked-selected-option"
                    : "inactive"
            }`}
            onClick={handleStatusChange(value)}
        >
            {label}
        </div>
    );
}
