import React from 'react';

export default function useGalleryModule() {
    const [showGallery, setShowGallery] = React.useState(false);

    const toggleGallery = () => setShowGallery(prev => !prev);

    return {
        showGallery,
        toggleGallery,
    };
}
