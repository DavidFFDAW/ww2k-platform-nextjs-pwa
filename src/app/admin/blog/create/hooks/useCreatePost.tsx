import HttpService from "@/services/http.service";
import { enqueueSnackbar } from "notistack";
import React from "react";

export default function useCreatePost() {
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const datas = new FormData(e.currentTarget);
        const data = Object.fromEntries(datas);
        const response = await HttpService.post("/api/blog/create", data);
        console.log({ response });

        if (!response.ok)
            return enqueueSnackbar(response.content.message, {
                variant: "error",
            });
    };

    return {
        handleFormSubmit,
    };
}
