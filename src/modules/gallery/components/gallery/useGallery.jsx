import React from 'react';
import { getAllImages } from '../../services/gallery.api.service';

export default function useGallery(state, stateUpdater) {
    React.useEffect(() => {
        const abortController = new AbortController();

        getAllImages(abortController.signal).then(data => {
            stateUpdater('images', data.images);
        });

        return () => {
            abortController.abort();
        };
    }, []);

    return {
        images: state.images,
        setImages: stateUpdater,
    };
}
