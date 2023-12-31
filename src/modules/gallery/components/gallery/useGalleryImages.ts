import React, { DragEvent } from "react";
import useCookies from "@/hooks/useCookies";
import { useGalleryContext } from "../../context/GalleryContext";
import {
    GalleryContextState,
    ImageUploadAPIResponse,
} from "../../gallery.models";
import { uploadImages } from "../../services/gallery.api.service";

interface UploadImagesState {
    uploadingImages: File[];
    show: boolean;
}

export default function useGalleryImages() {
    const cookieManager = useCookies();
    const { galleryState, setItem } = useGalleryContext();
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

    const onDrop = async (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        const verified: any = await cookieManager.getDecodedToken();
        console.log({ verified });

        if (!files || files.length <= 0 || !verified) return;
        const response = await uploadImages(files, verified.api_token);

        if (response.ok) {
            const { data }: { data: ImageUploadAPIResponse[] } =
                response.content;
            const uploadedImages = data.map((image) => {
                return { url: image.url };
            });
            setItem("images", [...uploadedImages, ...galleryState.images]);
        }
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
