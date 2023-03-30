import { BlogAdapters } from '@/adapters/blog.adapter';
import BlogPostsTable from '@/database/Blog';
import { APIService } from '@/services/api.service';
import { getServerSideCookie } from '@/utils/server.utils';

export default async function handler(req, res) {
    const service = APIService(req, res);
    console.log(req.cookies);

    service.checkAPIMethod('DELETE');
    const user = await service.checkValidHeaderToken();

    if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const { id } = req.query;
    const isDestroyed = await BlogPostsTable.destroy({ where: { id } });

    if (!isDestroyed) {
        return res.status(400).json({ message: 'Post not found' });
    }

    return res.status(200).json({ message: 'Post deleted' });
}
