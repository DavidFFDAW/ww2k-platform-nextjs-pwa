import { NullableLoading } from "@/components/Loading/LoadingComponent";
import React from "react";
import EmblaCarousel, { EmblaSlide } from "./Carousel/EmblaCarousel";
import Image from "@/components/Image/Image";
import { ButtonCTA } from "@/components/Buttons/Buttons";

export default function UploadingImages({
    show,
    images,
    toggleModal,
}: {
    show: boolean;
    images: File[];
    toggleModal: () => void;
}) {
    const valiImageTypes = ["image/jpeg", "image/png", "image/webp"];
    const parsedImages = images.map((image) => ({
        name: image.name,
        type: image.type,
        size: image.size,
        url: URL.createObjectURL(image),
        kbSize: (image.size / 1024).toFixed(1),
    }));

    const isThereUploadSizeProblem = parsedImages.some(
        (image) => image.size > 1000000 || !valiImageTypes.includes(image.type)
    );

    return (
        <>
            <NullableLoading condition={show}>
                <dialog
                    open={show}
                    className="gallery-module-box boxed dialog"
                    style={{ width: 400, height: "auto" }}
                >
                    <header className="flex end acenter gallery-header">
                        <button className="btn close" onClick={toggleModal}>
                            &times;
                        </button>
                    </header>
                    <NullableLoading condition={isThereUploadSizeProblem}>
                        <h1>
                            Revisa las imágenes que vas a subir. Alguna tiene un
                            problema
                        </h1>
                    </NullableLoading>
                    <div className="gallery-loading-container">
                        <EmblaCarousel
                            options={{ dragFree: false, loop: false }}
                            autoplayOptions={{
                                delay: 3000,
                                stopOnInteraction: false,
                            }}
                        >
                            {parsedImages.map((slide, index) => (
                                <EmblaSlide key={index}>
                                    <div className="flex center acenter column">
                                        <Image
                                            className="max-img gallery-aside-block-img"
                                            src={slide.url}
                                            alt="Your alt text"
                                        />
                                        <div className="w1 flex center acenter">
                                            <div>
                                                <div className="w1 flex start acenter gap">
                                                    <h4>
                                                        <strong>Name</strong>
                                                    </h4>
                                                    <p>{slide.name}</p>
                                                </div>
                                                <div className="w1 flex start acenter gap">
                                                    <h4>
                                                        <strong>Type</strong>
                                                    </h4>
                                                    <p>{slide.type}</p>
                                                </div>
                                                <div className="w1 flex start acenter gap">
                                                    <h4>
                                                        <strong>Size</strong>
                                                    </h4>
                                                    <p>
                                                        {slide.kbSize as string}{" "}
                                                        KB
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </EmblaSlide>
                            ))}
                        </EmblaCarousel>
                    </div>
                    <NullableLoading condition={!isThereUploadSizeProblem}>
                        <div className="w1 flex end acenter pad">
                            <ButtonCTA
                                text={"Subir imágenes"}
                                type="button"
                                onClick={() => console.log("Upload images")}
                            />
                        </div>
                    </NullableLoading>
                </dialog>
            </NullableLoading>
        </>
    );
}
