'use server'
import { revalidatePath } from "next/cache";
import { BlogQueries } from "@/queries/blog.queries";

export async function deletePost(formData: FormData) {
    const postID = formData.get('post_id');
    if (!postID) {
        return { message: 'Post ID is required', error: true }
    }

    try {
        const deleted = await BlogQueries.deletePostAndCommentsIfAny(Number(postID));

        if (deleted.id) return revalidatePath('/admin/blog');

    } catch (error) {
        console.log(error);
        return { message: 'Something went terribly wrong', error: true }
    }
}

export async function toggleAutomaticPostDeletion(formData: FormData) {
    const postID = formData.get('post_id');
    const status = formData.get('current_status');

    if (!postID) {
        return { message: 'Fields post_id and current_status are required', error: true }
    }

    try {
        const deletable = Number(status) === 0 ? true : false;
        const updated = await BlogQueries.toggleDeletable(Number(postID), Boolean(deletable));
        if (updated) return revalidatePath('/admin/blog');

    } catch (error) {
        console.log(error);
        return { message: 'Something went terribly wrong', error: true }
    }
}

export async function changePublishedState(formData: FormData) {
    const postID = formData.get('post_id');
    const status = formData.get('post_current_publish_state');

    if (!postID) {
        return { message: 'Fields post_id and post_current_publish_state are required', error: true }
    }

    try {
        const publishedState = Number(status) === 0 ? true : false;
        const updated = await BlogQueries.publishOrUnpublish(Number(postID), Boolean(publishedState));
        if (updated) return revalidatePath('/admin/blog');

    } catch (error) {
        console.log(error);
        return { message: 'Something went terribly wrong', error: true }
    }
}
