import Image from "next/image";

export default function CustomImage({
    src,
    alt,
    width = 512,
    height = 512,
    className,
    style,
}) {
    return (
        <Image
            width={width}
            height={height}
            style={style}
            src={src}
            alt={alt}
            className={className}
            draggable={false}
        />
    );
}