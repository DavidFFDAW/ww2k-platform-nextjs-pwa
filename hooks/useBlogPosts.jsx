import { deleteRequest } from '@/services/http.service';
import { getEndpoint } from '@/utils/server.utils';

export default function useBlogPosts() {
    const deletePost = id => {
        if (!confirm('¿ Estas seguro de que quieres borrar este post del blog ?'))
            return;

        deleteRequest(getEndpoint('/posts/' + id)).then(res => {
            if (res.status === 200) {
                alert('El post ha sido borrado exitosamente');
                window.location.reload();
            }
        });
    };

    return {
        deletePost,
    };
}
