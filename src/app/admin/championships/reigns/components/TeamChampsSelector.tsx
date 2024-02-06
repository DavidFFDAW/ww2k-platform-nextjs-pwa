'use client';
import { NullableLoading } from '@/components/Loading';
import React from 'react'

interface TeamChampsSelectorProps {
    members: {
        id: number
        name: string
        image_name: string
    }[]
}

export default function TeamChampsSelector({ members }: TeamChampsSelectorProps) {
    const [selected, setSelected] = React.useState<number[]>([]);

    const addSelected = (id: number) => {
        if (selected.length === 2 && !selected.includes(id)) {
            return setSelected([selected[1], id]);
        }
        if (selected.includes(id)) {
            return setSelected(selected.filter((member) => member !== id));
        }
        return setSelected([...selected, id]);
    };

    return (
        <>
            <div className='w1 block-section-title'>
                <h3 className='title dreadnotus uppercase'>Elige a los campeones</h3>
            </div>

            <div className='w1 block-section-content'>
                <div className='w1 member-partner-selector-container flex acenter gap-small responsive-column responsive-align-start'>

                    {members.map((member) => {
                        const includesClass = selected.includes(member.id) ? 'selected-partner' : 'unselected-partner';
                        return (
                            <div key={member.id} className={`responsive-w1 selectable-partner pointer ${includesClass}`} onClick={() => addSelected(member.id)}>{member.name}</div>
                        )
                    })}
                </div>

                {/* Añadimos los inputs ocultos de los distintos miembros del equipo */}
                <NullableLoading condition={selected.length > 0}>

                    {selected.map((member, index) => (
                        <input type="hidden" name='partners[]' value={member} key={index} />
                    ))}
                </NullableLoading>
            </div>
        </>
    )
}
