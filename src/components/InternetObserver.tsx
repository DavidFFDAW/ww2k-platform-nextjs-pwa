import { useEffect } from 'react';
import { enqueueSnackbar } from 'notistack';

export default function InternetObserver() {
    const changeStatus = () => {
        const message = navigator.onLine
            ? 'Hay una conexión activa a Internet'
            : 'No dispones de conexión a Internet en estos momentos :(';
        const variant = navigator.onLine ? 'success' : 'error';
        enqueueSnackbar(message, { variant: variant });
    };

    useEffect(() => {
        window.addEventListener('online', changeStatus);
        window.addEventListener('offline', changeStatus);

        return () => {
            window.removeEventListener('online', changeStatus);
            window.removeEventListener('offline', changeStatus);
        };
    }, []);
}
