import CustomImage from '@/components/Image';
import config from '@/constants/config';
import { BackendHttpService } from '@/services/backend.http.service';
import { getFormattedDate } from '@/utils/date.utils';
import { getEndpoint, getServerSideCookie } from '@/utils/server.utils';
import Head from 'next/head';

export default function Posts({ posts }) {
    console.log(posts);

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
                        <img
                            className="blog-post-image rounded"
                            src={post.image}
                            alt={post.title}
                            width={100}
                            height={100}
                        />
                        <div className="flex start column al-start gap-small padded">
                            <p>{post.title}</p>
                            <span>{post.content.slice(0, 25)}...</span>
                            <span style={{ textAlign: 'end', width: '100%' }}>
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
    const posts = await BackendHttpService(user.token).get(getEndpoint('posts'));

    return {
        props: {
            posts,
        },
    };
}
