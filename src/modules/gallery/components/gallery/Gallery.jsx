import React from 'react';
import useGallery from './useGallery';
import Spinner from '~/components/Spinner/Spinner';
import { useGalleryContext } from '../../context/GalleryContext';
import { NullableLoading } from '~/components/Loading/LoadingComponent';

function Gallery() {
    const { galleryState, setItem } = useGalleryContext();
    const { images } = useGallery(galleryState, setItem);

    console.log({ galleryState });

    if (!images.length) return <Spinner />;

    const logMyIndex = e => {
        const index = e.target.dataset.index;
        console.log({ index });
    };

    const setCurrentImage = image => {
        setItem('currentImage', image);
    }

    return (
        <>
            <div className='w1 flex center acenter'>
                <div className="gallery-images-container">
                    {images.map((image, index) => (
                        <div className="gallery-image" key={index} role="presentation" onClick={_ => setCurrentImage(image)}>
                            <img width={150} height={150} src={image.url} alt={`gallery-${index}`} />

                            <div className="gallery-image-overlay">
                                <button type="button" className="btn btn-primary delete-button" data-index={index} onClick={logMyIndex}>
                                    &times;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* <NullableLoading condition={Boolean(galleryState.currentImage)}> */}
                <div style={{ width: Boolean(galleryState.currentImage) ? 250 : 0 }} className={Boolean(galleryState.currentImage) ? 'animate__animated animate__fadeInRight animate__faster' : ''}>
                    <div className="gallery-image-modal" style={{ height: '100%', background: '#eee' }}>
                        <div className="gallery-image-modal-content">
                            <img className='max-img' style={{ padding: 20, maxWidth: '100%' }} src={galleryState.currentImage?.url} alt="gallery" />
                            <div className='w1'>
                                <p style={{ wordBreak: 'break-word' }}>{galleryState.currentImage?.name}</p>
                            </div>
                            <button type="button" onClick={_ => setItem('currentImage', null)}>Cerrar</button>
                        </div>
                    </div>
                </div>
                {/* </NullableLoading> */}
            </div >
        </>

    );
}

export default Gallery;
