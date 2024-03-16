"use client";
import React, { ChangeEvent } from "react";
import "./droparea.css";
import { BootstrapIcon } from "../Icon/BootstrapIcon";
import { enqueueSnackbar } from "notistack";
import { NullableLoading } from "../Loading";

interface DropAreaProps {
    accept?: string;
}

export default function DropArea({ accept }: DropAreaProps) {
    const [test, setTestContent] = React.useState<any>([]);

    const dragOver = (event: any) => {
        event.preventDefault();
    };

    const onDrop = (event: any) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        console.log({ file });
    };

    const fireBoxSpaceUpdate = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const target = e.target as HTMLInputElement;

        if (!target.files || target.files.length < 1)
            return console.log("No file");

        const file = target.files[0];

        if (file.type !== "text/csv") {
            return enqueueSnackbar("El archivo no es un CSV", {
                variant: "error",
            });
        }

        const reader = new FileReader();
        reader.onload = (e: any) => {
            const textcsv = e.target.result;
            const arrayzatedCSV = textcsv.split("\n").map((line: string) => {
                return line.split(",");
            });

            setTestContent(arrayzatedCSV);
        };
        reader.readAsText(file);

        console.log({ file });
    };

    console.log({ test });

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
                    type="file"
                    className="input-file-drag-drop"
                    name="import_csv_file_input"
                    onChange={fireBoxSpaceUpdate}
                    accept={accept}
                />
            </div>

            <table
                style={{
                    width: "100%",
                    marginTop: "20px",
                    borderCollapse: "collapse",
                    border: "1px solid #000",
                    borderSpacing: "5px",
                }}
            >
                <thead>
                    <NullableLoading condition={test.length > 1}>
                        <tr>
                            {test
                                .slice(0, 1)
                                .map((item: string, index: number) => {
                                    return <th key={index}>{item}</th>;
                                })}
                        </tr>
                    </NullableLoading>
                </thead>

                <tbody>
                    <NullableLoading condition={test.length > 1}>
                        <tr>
                            {test
                                .slice(1)
                                .map((item: string, index: number) => {
                                    return <td key={index}>{item}</td>;
                                })}
                        </tr>
                    </NullableLoading>
                </tbody>
            </table>
        </div>
    );
}
