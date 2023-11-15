import React from 'react'

export default function SkeletonCircle({ size }: { size: number }) {
    const style: React.CSSProperties = {
        width: `${size}px`,
        height: `${size}px`
    };

    return (
        <div className='skeleton-loading skeleton-circle' style={style}></div>
    )
}
