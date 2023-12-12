import React from 'react'

interface SkeletonLineProps {
    w?: number | string;
    h?: number | string;
    rotate?: number;
}

export default function SkeletonLine({ w = 200, h = 20, rotate = 0 }: SkeletonLineProps) {
    const style: React.CSSProperties = {
        width: `${w}px`,
        height: `${h}px`,
        transform: `rotate(${rotate}deg)`
    };

    return (
        <div className='w1 skeleton-loading skeleton-line' style={style}></div>
    )
}
