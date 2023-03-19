import BlogPostsTable from '@/database/Blog';

export async function getAllVisiblePosts(adapterCallback) {
    const posts = await BlogPostsTable.findAll({
        where: {
            visible: true,
        },
    });
    return JSON.stringify(posts.map(adapterCallback));
}
