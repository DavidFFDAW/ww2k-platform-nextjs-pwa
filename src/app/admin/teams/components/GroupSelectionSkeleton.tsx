import { Boxed } from '@/components/Box/Boxed';
import { ButtonSecondary, DangerButton } from '@/components/Buttons/Buttons';
import Image from '@/components/Image/Image';
import ScrollableArea from '@/components/Scrollable/ScrollableArea';
import SkeletonCircle from '@/components/Skeleton/Circle';
import SkeletonLine from '@/components/Skeleton/Line';
import Select from '@/modules/select/Select';
import React from 'react';

interface SelectedState {
    temporal: any;
    selected: any[];
}

interface GroupSelectionProps {
    list: any[];
    members?: any[];
}

export default function GroupSelectionSkeleton() {

    return (
        <Boxed w={'100'}>
            <div className="space-down">
                <ScrollableArea height={200} title={'Miembros de equipo'}>
                    <div className="w1 scrollable-item flex between astart column gap">
                        <div className="w1 flex acenter gap-small">
                            <SkeletonCircle size={50} />
                            <SkeletonLine w={150} h={10} />
                        </div>
                    </div>
                    <div className="w1 scrollable-item flex between astart column gap">
                        <div className="w1 flex acenter gap-small">
                            <SkeletonCircle size={50} />
                            <SkeletonLine w={150} h={10} />
                        </div>
                    </div>
                    <div className="w1 scrollable-item flex between astart column gap">
                        <div className="w1 flex acenter gap-small">
                            <SkeletonCircle size={50} />
                            <SkeletonLine w={150} h={10} />
                        </div>
                    </div>
                </ScrollableArea>
            </div>

            <Select
                zIndex={100}
                listHeight={250}
                name={'select-wrestler-team'}
                list={[]}
            />

            <div className="down w1 flex end acenter">
                <ButtonSecondary
                    text={'Agregar'}
                />
            </div>
        </Boxed>
    );
}
