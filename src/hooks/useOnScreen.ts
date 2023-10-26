'use client';
import { useEffect, useState } from 'react'

export default function useOnScreen(observerTarget: React.RefObject<HTMLElement>) {
    const [isInView, setInView] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 1 },
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };
    }, [observerTarget]);

    return { isInView };
}