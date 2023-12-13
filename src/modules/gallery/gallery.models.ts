export interface CurrentImage {
    url: string;
    name: string;
    size: number;
    type: string;
    extension: string;
    date: number;
}
export interface GalleryContextProps {
    children: React.ReactNode;
    selectImageCallback: (image: string) => void;
}
export interface GalleryContextState {
    showGallery: boolean;
    currentImage: CurrentImage | null;
    images: string[];
}


export interface ImageUploadAPIResponse {
    original_name: string
    name: string
    size: number
    date: number
    image_size: ImageSize
    type: string
    extension: string
    url: string
}

export interface ImageSize {
    "0": number
    "1": number
    "2": number
    "3": string
    bits: number
    mime: string
}