import LazyImage from "@/components/Image/LazyImage";
import React, { DragEvent } from "react";
import { useGalleryContext } from "../../context/GalleryContext";
import { NullableLoading } from "@/components/Loading/LoadingComponent";
import useGalleryImages from "./useGalleryImages";
import EmblaCarousel from "./Carousel/EmblaCarousel";
import UploadingImages from "./UploadingImages";

interface GalleryImagesProps {
    images: Array<{ url: string }>;
    setCurrentImage: (image: { url: string }) => void;
}

export default function GalleryImages({
    images,
    setCurrentImage,
}: GalleryImagesProps) {
    const { uploadingImages, toggleUploadImages, onDragOver, onDrop } =
        useGalleryImages();

    return (
        <>
            <UploadingImages
                show={uploadingImages.show}
                images={uploadingImages.uploadingImages}
                toggleModal={toggleUploadImages}
            />
            <div
                className="gallery-images-container"
                onDragOver={onDragOver}
                onDrop={onDrop}
            >
                {images.map((image, index) => (
                    <div
                        className="gallery-image"
                        key={index}
                        role="presentation"
                        onClick={(_) => setCurrentImage(image)}
                    >
                        <LazyImage
                            width={150}
                            height={150}
                            src={image.url}
                            alt={`gallery-${index}`}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}
