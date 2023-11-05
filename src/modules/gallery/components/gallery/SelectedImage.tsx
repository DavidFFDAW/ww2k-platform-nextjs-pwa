import { ButtonSecondary } from "@/components/Buttons/Buttons";
import Image from "@/components/Image/Image";
import React from "react";

interface SelectedImageProps {
    galleryState: any;
    setItem: (key: string, value: any) => void;
    selectImage: () => void;
}

export default function SelectedImage({
    galleryState,
    setItem,
    selectImage,
}: SelectedImageProps) {
    return (
        <div
            className="gallery-image-modal"
            style={{ height: "100%", background: "#eee" }}
        >
            <div className="gallery-image-modal-content">
                <Image
                    className="max-img gallery-aside-block-img"
                    src={galleryState.currentImage?.url}
                    alt="gallery"
                />
                <div className="w1">
                    <p style={{ wordBreak: "break-word" }}>
                        {galleryState.currentImage?.name}
                    </p>
                </div>

                <div className="w1 flex between acenter gap-smaller row">
                    <ButtonSecondary
                        text={"Cerrar"}
                        type="button"
                        onClick={() => setItem("currentImage", null)}
                    />

                    <ButtonSecondary
                        text={"Seleccionar"}
                        type="button"
                        onClick={selectImage}
                    />
                </div>
            </div>
        </div>
    );
}
