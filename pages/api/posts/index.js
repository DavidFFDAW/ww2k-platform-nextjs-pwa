import { BlogAdapters } from '@/adapters/blog.adapter';
import BlogPostsTable from '@/database/Blog';
import { APIService } from '@/services/api.service';
import { getServerSideCookie } from '@/utils/server.utils';

export default async function handler(req, res) {
    const service = APIService(req, res);
    console.log(req.cookies);

    service.checkAPIMethod('GET');
    const headerTokenUser = service.checkValidHeaderToken();
    const blogPosts = await BlogPostsTable.findAll();

    const mappedBlogPosts = blogPosts.map(blogPost => {
        return BlogAdapters.adminDataAdapter(blogPost);
    });

    return res.status(200).json(mappedBlogPosts);
}
