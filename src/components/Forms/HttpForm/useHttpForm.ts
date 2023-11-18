import HttpService from "@/services/http.service";
import { serializeFormDatas } from "@/utilities/form.utility";
import { enqueueSnackbar } from "notistack";
import React from "react";

interface useHttpFormParameters {
    href: string;
    responseKey: string;
    dispatch: React.Dispatch<any>;
    method: "post" | "put" | "delete" | "get";
}

export default function useHttpForm({
    href,
    dispatch,
    method,
    responseKey,
}: useHttpFormParameters) {
    const handleSendRequest = async (serializedDatas: any) => {
        dispatch((pr: any) => ({ ...pr, loading: true }));

        try {
            const response = await HttpService[method](href, serializedDatas);
            if (!response.ok) {
                dispatch((pr: any) => ({ ...pr, loading: false }));
                enqueueSnackbar(response.message, { variant: "error" });
                return;
            }

            dispatch((pr: any) => ({
                ...pr,
                loading: false,
                [responseKey]: response.content.data,
            }));
        } catch (error: any) {
            console.error(error);
            return enqueueSnackbar(error.message, { variant: "error" });
        }
    };

    const onSubmitHook = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const serializedDatas = serializeFormDatas(form);
        handleSendRequest(serializedDatas);
    };

    return { onSubmitHook };
}
