import React from "react";
import { useGalleryContext } from "../../context/GalleryContext";
import { getAllImages } from "../../services/gallery.api.service";

export default function useGallery() {
    const { galleryState, setGalleryState } = useGalleryContext();

    React.useEffect(() => {
        const abortController = new AbortController();

        getAllImages(abortController.signal).then((data) => {
            setGalleryState((prevState) => ({
                ...prevState,
                images: data.images,
            }));
        });

        return () => {
            abortController.abort();
        };
    }, [setGalleryState]);

    return {
        images: galleryState.images,
    };
}
