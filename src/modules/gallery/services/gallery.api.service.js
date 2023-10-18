import HttpService from '~/services/http.service';

const API_ENDPOINT = 'https://vps-f87b433e.vps.ovh.net/2k/api/v2/';

export async function getAllImages() {
    const response = await HttpService.get(`${API_ENDPOINT}images`);
    const { content } = response;

    return {
        images: content.data.images,
        size: content.data.directory_size,
    };
    // console.log(response);
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

function wpGalleryDeleteImage(filename) {
    const urlGalleryDeletion = API_ENDPOINT + 'images/delete?img=' + filename;
    console.log('urlGalleryDeletion: ', urlGalleryDeletion);
    if (!confirm('¿Estás seguro de eliminar esta imagen?')) return;

    HttpService.delete(urlGalleryDeletion)
        .then(response => {
            console.log(response);

            if (response.code === 200) {
                wpDeleteSelectedImage(filename);
            }
        })
        .catch(err => alert(err.message));
}

function wpUploadFormData(formData) {
    return fetch(API_ENDPOINT + 'images/new', {
        method: 'POST',
        body: formData,
    }).then(response => response.json());
}

function wpAsyncUploadImage(files) {
    const formData = wpPrepareFormData(files);
    wpCreateImageLoadingDiv(files);
    wpUploadFormData(formData)
        .then(response => {
            console.log(response);
            if (response.code === 200) {
                wpRemoveLoadingDivs();
                wpPrependImages(response);
            }
        })
        .catch(error => {
            console.log(' -- Error -- ');
            console.error('Error:', error.message);
            wpRemoveLoadingDivs();
            alert(error.message);
        });
}
