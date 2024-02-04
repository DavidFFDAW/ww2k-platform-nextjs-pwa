import { DOMAIN } from "@/constants/config";
import HttpService from "@/services/http.service";

const API_ENDPOINT = `${DOMAIN}/2k/api/v2/`;

export async function getAllImages() {
    const response = await HttpService.get(`${API_ENDPOINT}images`);
    const { content } = response;

    return {
        images: content.data.images,
        size: content.data.directory_size,
    };
    // document.querySelector('.wp_gallery .head h4').textContent =
    //     'Galería  (' + response.data.directory_size + ')';

    // TOTAL_GALLERY_ITEMS = response.data.images.length;
    // if (response.data.images && response.data.images.length > 0) {
    //     for (const item of response.data.images) {
    //         wp_galleryCreateImage(item);
    //     }
    //     wpSetOldActiveIfWasActive();
    // }
}

export function uploadImages(filesArray: File[], token: string) {
    const sendingData = new FormData();

    for (const [index, image] of filesArray.entries() as any) {
        sendingData.append(`image-${index}`, image);
    }

    const options: RequestInit = {
        method: "POST",
        mode: "cors",
        headers: {
            // "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
        },
        body: sendingData,
    };

    return fetch(`${API_ENDPOINT}images/new`, options)
        .then(async (response) => {
            try {
                const content = await response.json();

                return {
                    ...content,
                    ok: response.ok,
                    status: response.status,
                    content: content,
                };
            } catch (error: any) {
                return {
                    ok: response.ok,
                    status: response.status,
                    message: error.message,
                };
            }
        })
        .catch((error) => {
            return {
                ok: false,
                status: 500,
                message: error.message,
            };
        });
}

// function wpGalleryDeleteImage(filename: string) {
//     const urlGalleryDeletion = API_ENDPOINT + "images/delete?img=" + filename;
//     if (!confirm("¿Estás seguro de eliminar esta imagen?")) return;

//     HttpService.delete(urlGalleryDeletion)
//         .then((response) => {
//             if (response.code === 200) {
//                 wpDeleteSelectedImage(filename);
//             }
//         })
//         .catch((err) => alert(err.message));
// }

// function wpUploadFormData(formData) {
//     return fetch(API_ENDPOINT + "images/new", {
//         method: "POST",
//         body: formData,
//     }).then((response) => response.json());
// }

// function wpAsyncUploadImage(files) {
//     const formData = wpPrepareFormData(files);
//     wpCreateImageLoadingDiv(files);
//     wpUploadFormData(formData)
//         .then((response) => {
//             if (response.code === 200) {
//                 wpRemoveLoadingDivs();
//                 wpPrependImages(response);
//             }
//         })
//         .catch((error) => {
//             console.error("Error:", error.message);
//             wpRemoveLoadingDivs();
//             alert(error.message);
//         });
// }
