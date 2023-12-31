import React from "react";
import { useGalleryContext } from "../context/GalleryContext";
import { Gallery } from ".";
import { ButtonSecondary } from "@/components/Buttons/Buttons";

function GalleryContainer() {
    const { galleryState, toggleGallery } = useGalleryContext();

    return (
        <>
            <ButtonSecondary
                text={"Abrir Galería"}
                type={"button"}
                onClick={toggleGallery}
            />

            <dialog
                open={galleryState.showGallery}
                className="gallery-module-box boxed dialog"
            >
                <header className="flex end acenter gallery-header">
                    <button
                        type="button"
                        className="btn close"
                        onClick={toggleGallery}
                    >
                        &times;
                    </button>
                </header>
                <Gallery />
            </dialog>
        </>
    );
}

export default GalleryContainer;
