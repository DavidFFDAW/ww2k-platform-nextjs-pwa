import React, { DragEvent } from "react";

interface UploadImagesState {
    uploadingImages: File[];
    show: boolean;
}

export default function useGalleryImages() {
    const [uploadingImages, setUploadingImages] =
        React.useState<UploadImagesState>({
            uploadingImages: [],
            show: false,
        });

    const toggleUploadImages = () =>
        setUploadingImages((prevState) => ({
            ...prevState,
            show: !prevState.show,
        }));

    const setImages = (images: File[]) => {
        setUploadingImages((prevState) => ({
            ...prevState,
            uploadingImages: images,
        }));
    };

    const onDragOver = (e: any) => {
        e.preventDefault();
    };

    const onDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (!files || files.length <= 0) return;

        setUploadingImages((prevState) => ({
            ...prevState,
            uploadingImages: Array.from(files),
            show: true,
        }));
    };

    return {
        uploadingImages,
        setUploadingImages,
        toggleUploadImages,
        setImages,
        onDragOver,
        onDrop,
    };
}
