import HttpService from '@/services/http.service';
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';
import { enqueueSnackbar } from 'notistack';
import React from 'react';

export default function useCreatePost() {
    const router = useRouter();

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const datas = new FormData(e.currentTarget);
        const data = Object.fromEntries(datas);
        const response = await HttpService.post('/api/blog/create', data);

        if (!response.ok)
            return enqueueSnackbar(response.message, {
                variant: 'error',
            });

        enqueueSnackbar(response.message, {
            variant: 'success',
        });

        return router.push('/admin/blog');
    };

    return {
        handleFormSubmit,
    };
}
