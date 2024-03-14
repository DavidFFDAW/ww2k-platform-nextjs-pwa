'use client';
import HttpService from '@/services/http.service';
import React from 'react';

interface DownloadExcelProps {
    text: string | React.ReactNode;
    className?: string;
    excel: string;
}

export function DownloadExcel({ excel, className, text }: DownloadExcelProps) {
    return (
        <a
            href={`/api/excel/${excel}`}
            title="Download Excel button"
            className={className ? `btn button ${className}` : 'btn button cta'}
            download={`${excel}.xlsx`}
        >
            {text}
        </a>
    );
}
