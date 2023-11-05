import React from "react";
import { getAllImages } from "../../services/gallery.api.service";
import { useGalleryContext } from "../../context/GalleryContext";

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
