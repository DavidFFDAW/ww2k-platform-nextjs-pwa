import { BlogAdapters } from '@/adapters/blog.adapter';
import CustomImage from '@/components/Image';
import BlogPostsTable from '@/database/Blog';
import useBlogPosts from '@/hooks/useBlogPosts';
import { isValidHeaderToken } from '@/services/api.service';
import { getFormattedDate } from '@/utils/date.utils';
import { getServerSideCookie, serializeValues } from '@/utils/server.utils';
import Head from 'next/head';

export default function Posts({ posts }) {
    const maxWords = 20;
    const { deletePost } = useBlogPosts();

    return (
        <>
            <Head>
                <title>WWE-2K | Blog Posts</title>
            </Head>

            <div className="w1 flex center al-center column gap-small padded-big">
                {posts.map((post, idx) => (
                    <div
                        key={idx}
                        className="flex start al-center gap-small blog-post single"
                    >
                        <input type="checkbox" />
                        <CustomImage
                            className="blog-post-image rounded"
                            src={post.image}
                            alt={post.title}
                            width={100}
                            height={100}
                        />
                        <div className="w1 flex between al-center gap-small padded relative">
                            <div className="flex column gap-small padded">
                                <h4 className="title">{post.title}</h4>
                                <span className="block excerpt">
                                    {post.content.slice(0, maxWords)}...
                                </span>
                            </div>

                            <div className="actions">
                                <a
                                    href={`/admin/posts/edit/${post.id}`}
                                    className="btn btn-default"
                                >
                                    Editar
                                </a>

                                <button
                                    className="btn btn-danger"
                                    onClick={() => deletePost(post.id)}
                                >
                                    Borrar
                                </button>
                            </div>

                            <span
                                className="date-created"
                                style={{ textAlign: 'end' }}
                            >
                                {getFormattedDate(post.created)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const user = getServerSideCookie(context);
    console.log('blogs getServerSideProps: ', user);
    const userCheck = await isValidHeaderToken(user.token);
    console.log(userCheck);

    if (!userCheck) {
        return {
            redirect: {
                destination: '/auth/login',
            },
        };
    }

    const posts = await BlogPostsTable.findAll({
        order: [['created_at', 'DESC']],
    });
    const postsFormatted = posts.map(BlogAdapters.adminDataAdapter);

    return {
        props: {
            posts: serializeValues(postsFormatted),
        },
    };
}
