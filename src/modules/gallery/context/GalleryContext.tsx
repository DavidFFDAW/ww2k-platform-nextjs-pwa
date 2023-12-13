import React, { useState } from "react";
import { GalleryContextProps, GalleryContextState } from "../gallery.models";

const GalleryContext = React.createContext({
    galleryState: {} as GalleryContextState,
    setGalleryState: (state: GalleryContextState) => { },
    toggleGallery: () => { },
    selectImage: (url: string) => { },
    setItem: (key: any, value: any) => { },
});

export const GalleryContextProvider = ({
    children,
    selectImageCallback,
}: GalleryContextProps) => {
    const [galleryState, setGalleryState] = useState<GalleryContextState>({
        showGallery: false,
        currentImage: null,
        images: [],
    });

    const selectImage = (url: string) => {
        const imageURL = url || galleryState?.currentImage?.url || "";
        selectImageCallback(imageURL);
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
