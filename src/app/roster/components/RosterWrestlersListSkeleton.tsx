import React from 'react'
import BrandImage from './BrandImage';
import Image from '@/components/Image/Image';
import { ComponentSpinner } from '@/components/Spinner/Spinner';
import SkeletonLine from '@/components/Skeleton/Line';

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
                            <div className="total-image image-container" style={{
                                display: 'grid',
                                placeItems: 'center',
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                zIndex: 3,
                                opacity: 1,
                            }}>
                                <SkeletonLine w={128} h={190} />
                            </div>
                            <div className="roster-card-wrestler-name-container">
                                <h2 className="roster-wrestler-name">
                                    <SkeletonLine w={25} h={100} />
                                </h2>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}
