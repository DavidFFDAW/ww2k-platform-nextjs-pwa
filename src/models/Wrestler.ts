import { prisma } from "@/db/conn";

export class Wrestler {
    public static getRequiredFields() {
        return [
            "name",
            "brand",
            "status",
            "twitter_acc",
            "twitter_name",
            "finisher",
            "overall",
            "sex",
            "kayfabe_status",
        ];
    }

    public static getAllWrestlers() {
        return prisma.wrestler.findMany({
            orderBy: {
                name: "asc",
            },
        });
    }
}
