import { prisma } from "@/db/conn"

function toggleDeletable(id: number, deletable: boolean) {
    return prisma.report.update({
        data: {
            deletable: deletable
        },
        where: {
            id: Number(id)
        }
    });
}

async function deletePostAndCommentsIfAny(id: number) {
    await prisma.reportComments.deleteMany({
        where: {
            news_id: id,
        }
    });

    return prisma.report.delete({
        where: {
            id: id,
        }
    });
}

function publishOrUnpublish(id: number, publishState: boolean) {
    return prisma.report.update({
        data: {
            visible: publishState
        },
        where: {
            id: Number(id)
        }
    });
}


export const BlogQueries = {
    toggleDeletable: toggleDeletable,
    deletePostAndCommentsIfAny,
    publishOrUnpublish: publishOrUnpublish
}
// 