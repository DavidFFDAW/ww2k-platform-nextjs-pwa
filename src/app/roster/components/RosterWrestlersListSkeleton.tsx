import React from 'react'
import BrandImage from './BrandImage';
import Image from '@/components/Image/Image';

export default function RosterWrestlersListSkeleton() {
    const wrestlers = Array.from({ length: 16 }).map((_, index) => index);

    return (
        <>
            <div className="grid responsive-grid grid-three-column unconventional-grid gap">
                {wrestlers.map((_, index) => {
                    const brand = index % 2 === 0 ? "RAW" : "SD";
                    return (
                        <div key={index} className={"w1 grid-item roster-card relative brand-" + brand}>
                            <div className="overlay-gradient"></div>
                            <div className="roster-wrestler-brand">
                                <BrandImage brand={brand} />
                            </div>
                            <div
                                className="total-image image-container">
                                <Image
                                    width={128}
                                    height={128}
                                    src={'/vacant.webp'}
                                    alt={'vacant'}
                                />
                            </div>
                            <div className="roster-card-wrestler-name-container">
                                <h2 className="roster-wrestler-name">
                                    Vacant
                                </h2>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}
