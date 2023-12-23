'use client';
import { Boxed } from '@/components/Box/Boxed';
import { OnChangeInput } from '@/components/Forms/Inputs/OnChangeInput';
import LazyImage from '@/components/Image/LazyImage';
import Flex from '@/components/Layouts/Flex';
import React from 'react';

interface WrestlerListProps {
    list: any[];
    from: number;
    offset: number;
}

export default function WrestlerList({ list, from, offset }: WrestlerListProps) {
    const [wrestlers, setWrestlers] = React.useState<any[]>(list);

    React.useEffect(() => {
        setWrestlers(list);
    }, [list]);

    return (
        <>
            {wrestlers.slice(from, offset).map(wrestler => (
                <Boxed
                    w="100"
                    key={wrestler.id}
                    className={wrestler.status == 'released' ? 'opacity-05' : 'opacity-normal'}
                >
                    <Flex direction="column" align="center" gap={10}>
                        <LazyImage
                            src={wrestler.image_name as string}
                            alt={wrestler.name}
                            width={80}
                            height={80}
                            imgClassName="rounded"
                        />
                        <input className="w1" type="hidden" name={`ids[]`} value={wrestler.id} />
                        <OnChangeInput
                            type="text"
                            name={`names[]`}
                            value={wrestler.name}
                            label="Nombre"
                            placeholder=""
                        />
                        <OnChangeInput
                            type="text"
                            name={`aliases[]`}
                            value={wrestler.alias as string}
                            label="Alias"
                            placeholder=""
                        />
                        <OnChangeInput
                            type="text"
                            name={`finishers[]`}
                            value={wrestler.finisher as string}
                            label="Finisher"
                            placeholder=""
                        />
                    </Flex>
                </Boxed>
            ))}
        </>
    );
}
