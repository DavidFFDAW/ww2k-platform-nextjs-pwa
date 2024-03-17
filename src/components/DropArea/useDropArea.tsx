import { enqueueSnackbar } from "notistack";
import React, { ChangeEvent } from "react";

interface DropAreaState {
    headers: string[];
    content: { [key: string]: string }[];
    renderContent: string[][];
    hasUploadedFile: boolean;
    uploadedFile?: File;
}

export default function useDropArea(csvHeader: string[]) {
    const [dropAreaState, setDropAreaState] = React.useState<DropAreaState>({
        headers: csvHeader,
        content: [],
        renderContent: [],
        hasUploadedFile: false,
    });

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
            const arrayzatedCSV = textcsv
                .split("\n")
                .map((line: string) => {
                    return line.split(",");
                })
                .filter((line: string[]) => line.length > 1);

            const values = arrayzatedCSV.slice(1);
            const objectzatedCSV = values.map((value: string[]) => {
                return dropAreaState.headers.reduce(
                    (acc: any, key: string, index: number) => {
                        if (!value) return acc;

                        return {
                            ...acc,
                            [key]: value[index].replace("\r", "").trim(),
                            // [key]: value[index].replace("\r", ""),
                        };
                    },
                    {}
                );
            });

            console.log({ objectzatedCSV });

            setDropAreaState((prev) => ({
                ...prev,
                content: objectzatedCSV,
                renderContent: values,
                hasUploadedFile: true,
                uploadedFile: file,
            }));
        };
        reader.readAsText(file);
    };

    return { dragOver, onDrop, fireBoxSpaceUpdate, dropAreaState };
}
