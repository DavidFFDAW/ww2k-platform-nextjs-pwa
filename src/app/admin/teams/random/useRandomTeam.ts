import { Wrestler } from "@prisma/client";
import React from "react";

interface StateInterface {
    members: Wrestler[];
    loading: boolean;
}

export default function useRandomTeam() {
    const [state, setState] = React.useState<StateInterface>({
        members: [],
        loading: false,
    });

    const searchTeam = (serializedDatas: any) => {
        console.log("useRandomTeam: ", { serializedDatas });
    };

    return {
        state,
        setState,
        searchTeam,
    };
}
