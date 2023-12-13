import React from "react";
import useGalleryImages from "./useGalleryImages";
import LazyImage from "@/components/Image/LazyImage";

interface GalleryImagesProps {
    images: Array<{ url: string }>;
    setCurrentImage: (image: { url: string }) => void;
    selectImage: (url: string) => void;
}

export default function GalleryImages({
    images,
    setCurrentImage,
    selectImage,
}: GalleryImagesProps) {
    const { onDragOver, onDrop } = useGalleryImages();

    return (
        <>
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
                        onDoubleClick={() => selectImage(image.url)}
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
