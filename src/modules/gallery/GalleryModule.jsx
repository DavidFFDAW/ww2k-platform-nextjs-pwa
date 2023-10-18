import './assets/gallery.css';
import React from 'react';
import GalleryContext, { useGalleryContext } from './context/GalleryContext';
import GalleryContainer from './components/Container';

// Everything needed to work within the gallery
// is used here just so when you need or want to use
// the gallery, you can just import this module.
function GalleryModule() {
    return (
        <>
            <GalleryContext.Provider>
                <aside className="gallery-module" style={{ position: 'relative' }}>
                    <GalleryContainer />
                </aside>
            </GalleryContext.Provider>
        </>
    );
}

export default GalleryModule;
