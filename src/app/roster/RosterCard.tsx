"use client";
import React from 'react'
import BrandImage from './BrandImage';
import LazyImage from '@/components/Image/LazyImage';

interface Props {
    imgAlt?: string;
    imgSrc?: string;
    name: string;
    brand: string;
}

export default function RosterCard({
    imgAlt = 'noimage',
    imgSrc = '/noimage.jpg',
    name,
    brand,
}: Props) {

    return (
        <div className={'w1 grid-item roster-card relative brand-' + brand} >
            <div className='overlay-gradient'></div>
            <div className='roster-wrestler-brand'>
                <BrandImage brand={brand} />
            </div>
            <LazyImage width={128} height={128} src={imgSrc} alt={imgAlt} className='total-image image-container' />
            <div className='roster-card-wrestler-name-container'>
                <h2 className='roster-wrestler-name'>{name}</h2>
            </div>
        </div>
    )
}
