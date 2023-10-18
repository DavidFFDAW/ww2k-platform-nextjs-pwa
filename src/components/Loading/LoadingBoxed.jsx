import React from 'react'
import { ComponentSpinner } from '../Spinner/Spinner'

export default function LoadingBoxed() {
    return (
        <div className='w90 boxed loading-component-template'>
            <ComponentSpinner />
        </div>
    )
}
