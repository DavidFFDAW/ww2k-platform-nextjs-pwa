import React from 'react';
import { BootstrapIcon } from '../Icon/BootstrapIcon';

interface DownloadExcelProps {
    text: string | React.ReactNode;
    excel: string;
}

export function DownloadExcel({ excel, text }: DownloadExcelProps) {
    return (
        <a
            href={`/api/excel/${excel}`}
            title="Download Excel button"
            className="btn button excel-action btn-download-excel flex start acenter gap-smaller"
            download={`${excel}.xlsx`}
        >
            <BootstrapIcon icon="file-earmark-arrow-down" />
            <span>{text}</span>
        </a>
    );
}

interface ImportCsvButtonProps {
    text: string | React.ReactNode;
    url: string;
}

export function ImportCsvButton({ text, url }: ImportCsvButtonProps) {
    return (
        <a
            href={url}
            title="Import CSV button"
            className="btn button excel-action btn-import-csv flex start acenter gap-smaller"
        >
            <BootstrapIcon icon="file-earmark-arrow-up" />
            <span>{text}</span>
        </a>
    );
}
