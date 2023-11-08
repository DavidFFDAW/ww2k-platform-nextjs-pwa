import HttpService from '@/services/http.service';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import React from 'react'

export default function useUpdatePost() {
    const router = useRouter();

    const handleUpdatePostSubmit = async (e: React.FormEvent<HTMLFormElement>, id: number) => {
        e.preventDefault();
        const datas = new FormData(e.currentTarget);
        const data = Object.fromEntries(datas);
        const response = await HttpService.put(`/api/blog/update/${id}`, data);

        if (!response.ok)
            return enqueueSnackbar(response.message, {
                variant: 'error',
            });

        enqueueSnackbar(response.message, {
            variant: 'success',
        });

        if (response.ok) {
            return router.push('/admin/blog');
        }
    };

    return {
        handleUpdatePostSubmit,
    };
}
