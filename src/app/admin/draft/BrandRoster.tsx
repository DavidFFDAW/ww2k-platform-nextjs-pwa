import { NullableLoading } from '@/components/Loading';
import { Wrestler } from '@prisma/client';
import React from 'react'

interface Props {
    brand: 'Raw' | 'Smackdown';
    list: Wrestler[];
}

export default function BrandRoster({ brand, list }: Props) {
    const image = brand === 'Raw' ? '/raw-logo.webp' : '/smackdown-logo.webp';
    const maleCount = list.filter((it) => it.sex === 'M').length;
    const femaleCount = list.length - maleCount;

    return (
        <>
            <div className="w1 brand-roster">
                <header className="flex center acenter gap-small">
                    <img width={100} height={100} src={image} alt="" className='total-image' />
                </header>

                <section className='w1 flex acenter center column padded'>
                    <div className='flex center acenter gap-small'>
                        <p>Hombres: </p>
                        <span>{maleCount}</span>
                    </div>
                    <div className='flex center acenter gap-small'>
                        <p>Mujeres: </p>
                        <span>{femaleCount}</span>
                    </div>
                </section>

                <NullableLoading condition={list.length > 0}>
                    <div className="boxed clear flex center column astart gap-small">
                        {list.map(wrestler => (
                            <div className='flex center acenter gap' key={wrestler.id}>
                                <p>#{wrestler.id}</p>
                                <img width={50} height={50} src={wrestler.image_name as string} alt="" />
                                <p>{wrestler.name}</p>
                                <p>{wrestler.overall}</p>
                            </div>
                        ))}
                    </div>
                </NullableLoading>
            </div>
        </>
    )
}
