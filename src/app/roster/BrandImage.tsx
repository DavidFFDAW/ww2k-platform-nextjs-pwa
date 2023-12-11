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
                <Image width={size} height={size} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0c782e4c-fae0-4a87-b7b1-a752598d9df9/dcogl5e-ff49719d-366f-4858-b520-89d2cff14639.png/v1/fill/w_1024,h_458/wwe_evolution_2018_logo_png_by_ambriegnsasylum16_dcogl5e-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDU4IiwicGF0aCI6IlwvZlwvMGM3ODJlNGMtZmFlMC00YTg3LWI3YjEtYTc1MjU5OGQ5ZGY5XC9kY29nbDVlLWZmNDk3MTlkLTM2NmYtNDg1OC1iNTIwLTg5ZDJjZmYxNDYzOS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.yvx49NdqdcFaFjdbh9N2RiO3bBHQoOaHfepGGea0vHQ" alt="AWL" />
            </div>
        )

    return (
        <>
        </>
    )
}
