import React, { useState } from "react";
import { GalleryContextProps, GalleryContextState } from "../gallery.models";

const GalleryContext = React.createContext({});

export const GalleryContextProvider = ({
    children,
    selectImageCallback,
}: GalleryContextProps) => {
    const [galleryState, setGalleryState] = useState<GalleryContextState>({
        showGallery: false,
        currentImage: null,
        images: [],
    });

    const selectImage = () => {
        console.log({
            currentImage: galleryState.currentImage,
            images: galleryState.images,
            showGallery: galleryState.showGallery,
        });
        selectImageCallback(galleryState?.currentImage?.url || "");
        toggleGallery();
    };
    const toggleGallery = () =>
        setGalleryState((prev) => ({
            ...prev,
            showGallery: !prev.showGallery,
        }));
    const setItem = (key: any, value: any) =>
        setGalleryState((prev) => ({ ...prev, [key]: value }));

    const provided = {
        galleryState,
        setGalleryState,
        toggleGallery,
        selectImage,
        setItem,
    };

    return (
        <GalleryContext.Provider value={provided}>
            {children}
        </GalleryContext.Provider>
    );
};

export const useGalleryContext = () => React.useContext(GalleryContext);

const GalleryContextModule = {
    Provider: GalleryContextProvider,
    Consumer: GalleryContext,
};

export default GalleryContextModule;