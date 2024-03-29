import { useEffect } from 'react'

export default function useServiceWorker() {
    const timestamp = new Date().getTime();

    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register(`/service-worker.js?v=${timestamp}`, {
                scope: './',
                type: 'module',
                updateViaCache: 'none'
            })
                .catch(err => {
                    console.warn('Service worker registration failed', err.message);
                });
        }
    }, []);

    return {}
}
