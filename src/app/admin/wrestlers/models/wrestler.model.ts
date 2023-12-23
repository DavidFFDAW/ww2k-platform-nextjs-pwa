import { Wrestler } from "@prisma/client";

export const initialWrestler: Wrestler = {
    name: "",
    alias: "",
    finisher: "",
    overall: 0,
    sex: "",
    status: "",
    twitter_name: "",
    twitter_acc: "",
    twitter_image: "",
    image_name: "",
    brand: "",
    is_tag: false,
    kayfabe_status: "",
    is_champ: false,
    id: 0,
    created_at: new Date(),
    updated_at: new Date(),
    categories: "",
};
