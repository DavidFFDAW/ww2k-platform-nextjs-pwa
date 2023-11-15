import React from 'react'

export default function SkeletonLine({ w = 200, h = 20 }: { w?: number, h?: number }) {
    const style: React.CSSProperties = {
        width: `${w}px`,
        height: `${h}px`
    };

    return (
        <div className='w1 skeleton-loading skeleton-line' style={style}></div>
    )
}
