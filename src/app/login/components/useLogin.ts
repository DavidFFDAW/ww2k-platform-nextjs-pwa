import HttpService from "@/services/http.service";
import { redirect, useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import React from "react";

interface FormState {
    visiblePassword: boolean;
    loadingState: boolean;
    error: string;
}

const initialFormState: FormState = {
    visiblePassword: false,
    loadingState: false,
    error: "",
};

export default function useLogin() {
    const router = useRouter();
    const [formState, setFormState] =
        React.useState<FormState>(initialFormState);

    const setError = (error: string) => {
        setFormState((previous) => ({ ...previous, error }));
    };

    const setLoading = (loadingState: boolean) => {
        setFormState((previous) => ({ ...previous, loadingState }));
    };

    const loginCall = (credentials: { email: string; password: string }) => {
        return HttpService.post("/api/login", {
            email: credentials.email,
            password: credentials.password,
        });
    };

    const succesfulLog = (response: any) => {
        setLoading(false);
        console.log({ response });

        if (response?.error) return setError(response?.error as string);

        if (!response?.error) router.push("/admin");
    };

    const submitForm = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const form = new FormData(ev.currentTarget);

        if (!form.get("login_email") || !form.get("login_password"))
            return setError("Por favor, ingrese su correo y contraseña");

        setFormState((previous) => ({ ...previous, loadingState: true }));

        loginCall({
            email: (form.get("login_email") as string).toString().trim(),
            password: (form.get("login_password") as string).toString().trim(),
        })
            .then((response) => {
                succesfulLog(response);
            })
            .catch((error) => {
                enqueueSnackbar(`Error: ${error.message}`, {
                    variant: "error",
                });
            });
    };

    return {
        formState,
        setFormState,
        submitForm,
    };
}
