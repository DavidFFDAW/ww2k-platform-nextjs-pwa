import HttpService from "@/services/http.service";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";

interface SubmitHook {
    event: React.FormEvent<HTMLFormElement>;
    debug?: boolean;
    onSubmitCallback?: (formData: FormData) => void;
    sendHttp?: boolean;
}

interface useFormParameters {
    action: string | undefined;
    redirectRoute?: string;
}

export default function useForm({ action, redirectRoute }: useFormParameters) {
    const router = useRouter();

    const serializeFormDatas = (form: HTMLFormElement) => {
        const inputs = Array.from(form.elements);
        return inputs.reduce((acc: any, input: Element) => {
            const inputElement = input as HTMLInputElement;
            if (!inputElement.name) return acc;

            if (!inputElement.name.includes('[]')) {
                acc[inputElement.name] = inputElement.value;
                return acc;
            }

            const prop = inputElement.name.replace('[]', '');
            if (!acc[prop]) acc[prop] = [];
            acc[prop].push(inputElement.value);
            return acc;
        }, {});
    };


    const handleSendRequest = (serializedDatas: any) => {
        if (!action) throw new Error('Action is required');

        return HttpService.post(action, serializedDatas).then((response) => {
            if (!response.ok) return enqueueSnackbar(response.message, { variant: 'error' });
            enqueueSnackbar(response.message, { variant: 'success' });

            if (redirectRoute) {
                setTimeout(() => {
                    router.push(redirectRoute);
                }, 1000);
            }
        }).catch((error) => {
            console.error(error);
            return enqueueSnackbar(error.message, { variant: 'error' });
        });
    };

    const onSubmitHook = ({ event, debug, onSubmitCallback, sendHttp }: SubmitHook) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const serializedDatas = serializeFormDatas(form);

        if (debug) console.log({ serializedDatas });
        if (onSubmitCallback) return onSubmitCallback(formData);
        if (sendHttp) return handleSendRequest(serializedDatas);
    }

    return {
        onSubmitHook,
        handleSendRequest,
    }
}
