import React, { useEffect } from 'react'

export default function useClickOutside(ref: React.RefObject<HTMLElement>, callback: () => any) {
    const handleClick = (e: Event) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => document.removeEventListener('click', handleClick);
    }, [handleClick]);

}