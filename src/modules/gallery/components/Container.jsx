import React from 'react'
import { NullableLoading } from '~/components/Loading/LoadingComponent'
import { useGalleryContext } from '../context/GalleryContext'
import { Gallery } from '.';

function GalleryContainer() {
    const { galleryState, toggleGallery } = useGalleryContext();

    return (
        <div>
            <button type="button" onClick={toggleGallery}>
                Abrir Galería
            </button>

            <NullableLoading condition={galleryState.showGallery}>
                <dialog open={galleryState.showGallery} className='gallery-module-box boxed'>
                    <header className='flex end acenter gallery-header'>
                        <button className='btn close' onClick={toggleGallery}>&times;</button>
                    </header>
                    <Gallery />
                </dialog>
            </NullableLoading>

        </div>
    )
}

export default GalleryContainer
