import config from '@/constants/config';
import CookieService from '@/services/cookie.service';
import { getRequest } from '@/services/http.service';

export default function Posts({ posts }) {
    return (
        <div>
            <h1>Posts</h1>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { req, res } = context;
    const parsed = JSON.parse(req.cookies[config.NEXT_USER]);
    console.log(parsed.token);
    const posts = [];

    return {
        props: {
            posts,
        },
    };
}
