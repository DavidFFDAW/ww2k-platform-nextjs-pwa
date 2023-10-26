"use client";
import Image from '@/components/Image/Image';
import React, { useEffect, useRef } from 'react'
import BrandImage from './BrandImage';
import LazyImage from '@/components/Image/LazyImage';

interface Props {
    imgAlt?: string;
    imgSrc?: string;
    name: string;
    newLimit: () => void;
    isLast: boolean;
    brand: string;
}

export default function RosterCard({
    imgAlt = 'noimage',
    imgSrc = '/noimage.jpg',
    name,
    newLimit,
    isLast,
    brand,
}: Props) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (!cardRef?.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (isLast && entry.isIntersecting) {
                newLimit();
                observer.unobserve(entry.target);
            }
        });

        observer.observe(cardRef.current);

        return () => observer.disconnect();
    }, [isLast]);

    return (
        <div ref={cardRef} className='flex center acenter column gap-small'>
            <LazyImage width={128} height={128} src={imgSrc} alt={imgAlt} className='total-image' />
            <h2>{name}</h2>
            <BrandImage brand={brand} />
        </div>
    )
}
