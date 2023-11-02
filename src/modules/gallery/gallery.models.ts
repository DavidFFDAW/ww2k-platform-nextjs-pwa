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
