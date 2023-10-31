import React from "react";
import useGallery from "./useGallery";
import Spinner from "@/components/Spinner/Spinner";
import { useGalleryContext } from "../../context/GalleryContext";
import LazyImage from "@/components/Image/LazyImage";

function Gallery() {
    const { galleryState, setItem, selectImage } = useGalleryContext();
    const { images } = useGallery(galleryState, setItem);

    const isCurrentImageEmpty = !galleryState.currentImage;


    if (!images.length) return <Spinner />;

    const logMyIndex = (e) => {
        const index = e.target.dataset.index;
        console.log({ index });
    };

    const setCurrentImage = (image) => {
        setItem("currentImage", image);
    };

    return (
        <>
            <div className={`w1 flex center ${isCurrentImageEmpty ? 'acenter' : 'astart'}`}>
                <div className="gallery-images-container">
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

                            <div className="gallery-image-overlay">
                                <button
                                    type="button"
                                    className="btn btn-primary delete-button"
                                    data-index={index}
                                    onClick={logMyIndex}
                                >
                                    &times;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* <NullableLoading condition={Boolean(galleryState.currentImage)}> */}
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
                    <div
                        className="gallery-image-modal"
                        style={{ height: "100%", background: "#eee" }}
                    >
                        <div className="gallery-image-modal-content">
                            <LazyImage
                                className="max-img gallery-aside-block-img"
                                style={{ padding: 20, maxWidth: "100%" }}
                                src={galleryState.currentImage?.url}
                                alt="gallery"
                            />
                            <div className="w1">
                                <p style={{ wordBreak: "break-word" }}>
                                    {galleryState.currentImage?.name}
                                </p>
                            </div>

                            <div className="w1 flex between acenter gap row">
                                <button
                                    type="button"
                                    onClick={(_) => setItem("currentImage", null)}
                                >
                                    Cerrar
                                </button>

                                <button
                                    type="button"
                                    onClick={selectImage}
                                >
                                    Seleccionar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </NullableLoading> */}
            </div>
        </>
    );
}

export default Gallery;
