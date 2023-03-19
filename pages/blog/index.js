import { BlogAdapters } from '@/adapters/blog.adapter';
import { getAllVisiblePosts } from '@/services/blog.service';

export default function Blog({ posts }) {
    console.log(posts);

    return JSON.parse(posts).map(post => (
        <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>{post.exceptr}</p>
            <p>{post.category}</p>
        </div>
    ));
}

export async function getServerSideProps(context) {
    const posts = await getAllVisiblePosts(BlogAdapters.publicDataAdapter);

    return {
        props: {
            posts,
        },
    };
}
