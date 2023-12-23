"use client";
import Grid from "@/components/Layouts/Grid/Grid";
import Padding from "@/components/Layouts/Padding/Padding";
import React from "react";
import { WrestlerStatuses } from "../../../models/wrestler.status.model";
import WrestlerStatusItem from "./WrestlerStatusItem";

interface Props {
    label: string;
    name: string;
    value?: string;
    required?: boolean;
}

export default function WrestlerStatusSelect({
    label,
    name,
    value = "",
    required = false,
}: Props) {
    const [selectedStatus, setSelectedStatus] = React.useState<string>(value);

    const handleStatusChange = (newStatus: string) => {
        return () => setSelectedStatus(newStatus);
    };

    return (
        <div className="w1 wrestler-status-select-component custom-clickable-options-component flex column gap-small">
            <label className="label" htmlFor={name}>
                {label}
                {required ? <span className="required">*</span> : null}
            </label>

            <Grid columns={3} gap={15} align="center" place="center">
                <WrestlerStatusItem
                    value={WrestlerStatuses.Active}
                    label="En activo"
                    handleStatusChange={handleStatusChange}
                    selectedStatus={selectedStatus}
                />
                <WrestlerStatusItem
                    value={WrestlerStatuses.Released}
                    label="Despedido"
                    handleStatusChange={handleStatusChange}
                    selectedStatus={selectedStatus}
                />
                <WrestlerStatusItem
                    value={WrestlerStatuses.Retired}
                    label="Retirado"
                    handleStatusChange={handleStatusChange}
                    selectedStatus={selectedStatus}
                />
                <WrestlerStatusItem
                    value={WrestlerStatuses.NotActive}
                    label="No activo"
                    handleStatusChange={handleStatusChange}
                    selectedStatus={selectedStatus}
                />
                <WrestlerStatusItem
                    value={WrestlerStatuses.Manager}
                    label="Manager"
                    handleStatusChange={handleStatusChange}
                    selectedStatus={selectedStatus}
                />
                <WrestlerStatusItem
                    value={WrestlerStatuses.SemiActive}
                    label="Semi-activo"
                    handleStatusChange={handleStatusChange}
                    selectedStatus={selectedStatus}
                />
            </Grid>

            <input
                type="hidden"
                name={name}
                value={selectedStatus}
                required={required}
            />
        </div>
    );
}
