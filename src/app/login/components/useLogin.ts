"use client";
import HttpService from "@/services/http.service";
import { useRouter } from "next/navigation";
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
        enqueueSnackbar(`Error: ${error}`, {
            variant: "error",
        });
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
                setLoading(false);
                if (response.ok) {
                    console.log({ response });

                    return setTimeout(() => {
                        router.push("/admin");
                    }, 1000);
                }
            })
            .catch((error) => {
                console.log({ error });

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
