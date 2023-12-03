"use client";
import HttpService from "@/services/http.service";
import { serializeFormDatas } from "@/utilities/form.utility";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";

interface SubmitHook {
    event: React.FormEvent<HTMLFormElement>;
    debug?: boolean;
    onSubmitCallback?: (serializedDatas: {}) => void;
    preParseCallback?: (serializedDatas: {}) => any;
    sendHttp?: boolean;
}

interface useFormParameters {
    method: "post" | "put" | "delete" | "get";
    action: string | undefined;
    redirectRoute?: string;
    refresh?: boolean;
    debug?: boolean;
}

export default function useForm({
    method,
    action,
    redirectRoute,
    refresh,
    debug,
}: useFormParameters) {
    const router = useRouter();

    const handleSendRequest = (serializedDatas: any) => {
        if (!action)
            return enqueueSnackbar("`action` is required in form", {
                variant: "error",
            });

        return HttpService[method](action, serializedDatas)
            .then((response) => {
                if (!response.ok)
                    return enqueueSnackbar(response.message, {
                        variant: "error",
                    });
                enqueueSnackbar(response.message, { variant: "success" });
                if (refresh) router.refresh();

                if (redirectRoute) {
                    setTimeout(() => {
                        router.push(redirectRoute);
                    }, 1000);
                }
            })
            .catch((error) => {
                console.error(error);
                return enqueueSnackbar(error.message, { variant: "error" });
            });
    };

    const onSubmitHook = ({
        event,
        onSubmitCallback,
        preParseCallback,
        sendHttp,
    }: SubmitHook) => {
        event.preventDefault();
        // const hasReasonToStop = !onSubmitCallback && !sendHttp;

        const form = event.target as HTMLFormElement;
        const serializedDatas = serializeFormDatas(form);
        if (debug) console.log({ serializedDatas });

        if (onSubmitCallback) return onSubmitCallback(serializedDatas);
        const datas = preParseCallback
            ? { datas: preParseCallback(serializedDatas) }
            : serializedDatas;

        if (sendHttp) return handleSendRequest(datas);
    };

    return {
        onSubmitHook,
        handleSendRequest,
    };
}
