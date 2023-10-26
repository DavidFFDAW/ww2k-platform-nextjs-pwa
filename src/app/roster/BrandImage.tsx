import Image from '@/components/Image/Image'
import React from 'react'

export default function BrandImage({ brand }: { brand: string }) {
    const size = 60;

    if (brand.toUpperCase() === 'SD')
        return (
            <div className="brand-image">
                <Image width={size} height={size} src="/smackdown-logo.webp" alt="SmackDown" />
            </div>
        )

    if (brand.toUpperCase() === 'RAW')
        return (
            <div className="brand-image">
                <Image width={size} height={size} src="/raw-logo.webp" alt="RAW" />
            </div>
        )

    if (brand.toUpperCase() === 'AWL')
        return (
            <div className="brand-image">
                <Image width={size} height={size} src="/icons/icon-512x512.png" alt="AWL" />
            </div>
        )

    return (
        <>
        </>
    )
}
