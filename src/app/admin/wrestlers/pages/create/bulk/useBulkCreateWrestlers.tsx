import { Wrestler } from "@prisma/client";
import React from "react";

export default function useBulkCreateWrestlers() {
    const [bulkWrestlers, setBulkWrestlers] = React.useState<Wrestler[]>([]);

    const addWrestlerItem = () => {
        setBulkWrestlers((prev: any) => {
            return [
                ...prev,
                {
                    name: "",
                    alias: "",
                    brand: "",
                    status: "",
                    twitter_acc: "",
                    twitter_name: "",
                    finisher: "",
                    overall: "",
                    kayfabe_status: "",
                },
            ];
        });
    };

    return {
        wrestlers: bulkWrestlers,
        addWrestlerItem,
    };
}
