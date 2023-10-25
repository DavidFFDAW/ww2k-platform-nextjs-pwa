import { BootstrapIcon } from '@/components/Icon/BootstrapIcon';
import { NullableLoading } from '@/components/Loading/LoadingComponent';
import React, { MouseEvent } from 'react'

interface ActionSubmitProps {
    text: string;
    icon: string;
    color: string;
    value: string;
    name: string;
};

export function ActionSubmit({ text, icon, color, value, name }: ActionSubmitProps) {

    return (
        <div className={`flex start acenter gap-small action-link ${color}`} data-value-passed={value}>
            <input type="hidden" value={value} name={name} />

            <NullableLoading condition={icon}>
                <div className="icon-wrapper">
                    <BootstrapIcon icon={icon} />
                </div>
            </NullableLoading>

            <div className='w1'>

                <button
                    type='submit'
                    className='w1 unsubmit-appearance submit-button action-text'
                >
                    {text}
                </button>
            </div>
        </div>
    )
}
