'use client';
import { BootstrapIcon } from '@/components/Icon/BootstrapIcon';
import HttpService from '@/services/http.service';
import { enqueueSnackbar } from 'notistack';
import React from 'react'

interface Props {
    text: string;
    endpoint: string;
    working?: boolean;
}

export default function ExportLink({ text, endpoint, working }: Props) {
    const requestJson = async () => {
        if (!working) return enqueueSnackbar('No disponible', { variant: 'error' });
        const response = await HttpService.get(`/api/exportation/${endpoint}`);
        if (!response.ok) return enqueueSnackbar('Error al descargar el archivo', { variant: 'error' });

        const json = JSON.stringify(response.data, null, 4);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `${text.toLowerCase()}-${(new Date()).getTime()}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    return (
        <div className='w1 boxed noradius flex between acenter small-pad'>
            <div className='flex acenter gap-small'>
                <BootstrapIcon icon='database' color='#003891' />
                <p className='uppercase sourcesans'>{text}</p>
                {!working && <p className='optional-text sourcesans'>(No disponible)</p>}
            </div>
            <button disabled={!working} type='button' role='button' className='btn blue sourcesans' onClick={requestJson}>Descargar</button>
        </div>
    )
}
