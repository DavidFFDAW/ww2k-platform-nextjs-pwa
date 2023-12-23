"use client";
import Image from "@/components/Image/Image";
import dynamic from "next/dynamic";
import { useState } from "react";

interface ImageProps {
    placeholder?: string;
    name?: string;
    imageSrc?: string;
    label: string;
    required?: boolean;
}

export function ImageInput({
    placeholder = "Imagen",
    name = "image",
    imageSrc = "",
    label,
    required = true,
}: ImageProps) {
    const Gallery = dynamic(() => import("@/modules/gallery/GalleryModule"), {
        ssr: false,
    });
    const [image, setState] = useState<string>(() => imageSrc);

    const size = 100;
    const handleImageChange = (e: any) => {
        const image = e.target.value;
        setState(image);
    };

    const selectImage = (image: string) => {
        setState(image);
    };

    return (
        <div className="w1 flex column astart gap-small">
            <label htmlFor={name} className="label">
                {label}
                {required ? <span className="required">*</span> : null}
            </label>
            <div className="w1 flex between acenter gap-small">
                <Image
                    width={size}
                    height={size}
                    src={image}
                    alt="post banner image preview"
                />
                <div className="w1 flex column gap-smaller a">
                    <input
                        className="w1"
                        maxLength={255}
                        type={"text"}
                        name={name}
                        required={required}
                        value={image}
                        placeholder={placeholder}
                        onChange={handleImageChange}
                    />
                    <Gallery selectImageCallback={selectImage} />
                </div>
            </div>
        </div>
    );
}
