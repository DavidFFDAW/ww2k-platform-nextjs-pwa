"use client";
import React from "react";
import { BootstrapIcon } from "../Icon/BootstrapIcon";
import { NullableLoading } from "../Loading";
import useDropArea from "./useDropArea";
import "./droparea.css";

interface DropAreaProps {
    accept?: string;
    csvHeader: string[];
}

export default function DropArea({ accept, csvHeader }: DropAreaProps) {
    const { dropAreaState, fireBoxSpaceUpdate, onDrop, dragOver } =
        useDropArea(csvHeader);

    return (
        <div className="w1 panel-csv-import drop-area-wrapper-container">
            <p>Arrastra el archivo CSV o pincha para subirlo manualmente</p>

            <input
                type="hidden"
                name="_importcsv"
                value={JSON.stringify(dropAreaState.content)}
            />

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
                    <NullableLoading condition={dropAreaState.hasUploadedFile}>
                        <div className="file-icon">
                            <BootstrapIcon icon="file-earmark-text-fill" />
                        </div>

                        <div className="file-name">
                            {dropAreaState.uploadedFile?.name}
                        </div>
                    </NullableLoading>
                </div>

                <input
                    type="file"
                    className="input-file-drag-drop"
                    name="import_csv_file_input"
                    onChange={fireBoxSpaceUpdate}
                    accept={accept}
                />
            </div>

            <div className="import-preview-table boxed down">
                <h2 className="box-title import-preview-table-title">
                    Vista previa
                </h2>

                <div className="w1 table-responsive-wrapper">
                    <table>
                        <thead>
                            <NullableLoading
                                condition={dropAreaState.headers.length > 1}
                            >
                                <tr>
                                    {dropAreaState.headers.map(
                                        (item: string, index: number) => {
                                            return <th key={index}>{item}</th>;
                                        }
                                    )}
                                </tr>
                            </NullableLoading>
                        </thead>

                        <tbody>
                            <NullableLoading
                                condition={dropAreaState.content.length > 1}
                            >
                                {dropAreaState.renderContent
                                    .slice(0, 10)
                                    .map((item: string[], index: number) => {
                                        return (
                                            <tr key={index}>
                                                {item.map((value, index) => {
                                                    return (
                                                        <td key={index}>
                                                            {value}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        );
                                    })}
                            </NullableLoading>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
