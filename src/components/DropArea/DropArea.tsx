"use client";
import React from "react";
import "./droparea.css";
import { BootstrapIcon } from "../Icon/BootstrapIcon";

interface DropAreaProps {
    accept?: string;
}

export default function DropArea({ accept }: DropAreaProps) {
    const dragOver = (event: any) => {
        event.preventDefault();
    };

    const onDrop = (event: any) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        console.log(file);
    };

    const fireBoxSpaceUpdate = () => {};

    return (
        <div className="w1 panel-csv-import">
            <p>Arrastra el archivo CSV o pincha para subirlo manualmente</p>

            <div
                className="panel-file-drop"
                onDragOver={dragOver}
                onDrop={onDrop}
            >
                <div
                    id="panel-space-csv"
                    style={{ opacity: ".7" }}
                    className="space-for-file"
                >
                    <div className="file-icon">
                        <BootstrapIcon icon="file-earmark-arrow-up" />
                    </div>

                    <div className="file-name">
                        ps__rfid_inventory_epc_sync.sql
                    </div>
                </div>

                <input
                    id="csv-import-file-input"
                    type="file"
                    className="input-file-drag-drop"
                    name="import_csv_file_input"
                    onChange={fireBoxSpaceUpdate}
                    accept={accept}
                />
            </div>
        </div>
    );
}
