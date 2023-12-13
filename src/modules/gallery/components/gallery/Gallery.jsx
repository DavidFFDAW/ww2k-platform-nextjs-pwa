import React from "react";
import useGallery from "./useGallery";
import Spinner from "@/components/Spinner/Spinner";
import { useGalleryContext } from "../../context/GalleryContext";
import GalleryImages from "./GalleryImages";
import { NullableLoading } from "@/components/Loading";
import SelectedImage from "./SelectedImage";

function Gallery() {
    const { galleryState, setItem, selectImage } = useGalleryContext();
    const { images } = useGallery();

    const isCurrentImageEmpty = !galleryState.currentImage;

    if (!images.length) return <Spinner />;

    const setCurrentImage = (image) => {
        setItem("currentImage", image);
    };

    return (
        <>
            <div
                className={`w1 flex center ${isCurrentImageEmpty ? "acenter" : "astart"
                    }`}
            >
                <GalleryImages
                    images={images}
                    setCurrentImage={setCurrentImage}
                    selectImage={selectImage}
                />

                <NullableLoading condition={Boolean(galleryState.currentImage)}>
                    <div
                        style={{
                            width: Boolean(galleryState.currentImage) ? 250 : 0,
                        }}
                        className={
                            Boolean(galleryState.currentImage)
                                ? "animate__animated animate__fadeInRight animate__faster"
                                : ""
                        }
                    >
                        <SelectedImage
                            galleryState={galleryState}
                            setItem={setItem}
                            selectImage={selectImage}
                        />
                    </div>
                </NullableLoading>
            </div>
        </>
    );
}

export default Gallery;
