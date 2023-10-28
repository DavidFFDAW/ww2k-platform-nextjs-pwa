"use client";
import Link from "next/link";
import React from "react";
// import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ComponentSpinner } from "@/components/Spinner/Spinner";
import { FormErrorMessage } from "./FormErrorMessage";
import HttpService from "@/services/http.service";

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

export default function LoginForm() {
    const router = useRouter();
    // const session = useSession();
    const [formState, setFormState] =
        React.useState<FormState>(initialFormState);

    // if (session.status === "authenticated") router.push("/admin");

    const submitForm = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const form = new FormData(ev.currentTarget);

        if (!form.get("login_email") || !form.get("login_password"))
            return setFormState((previous) => ({
                ...previous,
                error: "Por favor, ingrese su correo y contraseña",
            }));

        try {
            setFormState((previous) => ({ ...previous, loadingState: true }));

            const response = await HttpService.post("/api/login", {
                email: form.get("login_email")?.toString().trim(),
                password: form.get("login_password")?.toString().trim(),
            });

            setFormState((previous) => ({ ...previous, loadingState: false }));
            console.log({ response });

            const isError =
                Boolean(response?.error) &&
                response?.status !== 200 &&
                !response?.ok;

            console.log({ isError });

            // if (isError) setFormState((previous) => ({ ...previous, error: response?.error as string }));
            if (response?.error)
                return setFormState((previous) => ({
                    ...previous,
                    error: response?.error as string,
                }));
            if (!isError) return router.push("/admin");
        } catch (error: any) {
            console.warn({ error });

            setFormState((previous) => ({
                ...previous,
                loadingState: false,
                error: error.message,
            }));
        }
    };

    return (
        <>
            {Boolean(formState.error) && (
                <FormErrorMessage
                    message={formState.error}
                    setError={setFormState}
                />
            )}

            <form onSubmit={(ev) => submitForm(ev)} method="POST">
                <div
                    className="flex center gap column al-start"
                    style={{ height: "205px" }}
                >
                    <input
                        type="text"
                        name="login_email"
                        placeholder="example@email.com"
                        autoComplete="email"
                        aria-autocomplete="list"
                        className="w1 app-custom-input"
                        required
                    />

                    <div className="w1 flex between">
                        <input
                            name="login_password"
                            type={
                                formState.visiblePassword ? "text" : "password"
                            }
                            placeholder="Password"
                            className="w1 app-custom-input nradius"
                            autoComplete="current-password"
                            aria-autocomplete="list"
                            required
                        />

                        <button
                            className="nradius pointer"
                            type="button"
                            role="button"
                            onClick={() =>
                                setFormState((previous) => ({
                                    ...previous,
                                    visiblePassword: !previous.visiblePassword,
                                }))
                            }
                        >
                            {formState.visiblePassword ? "Ocultar" : "Mostrar"}
                        </button>
                    </div>

                    <a href="#forgot">He olvidado mi contraseña</a>
                </div>

                <div className="w1 flex between row">
                    <Link href={"/register"}>
                        <button type="button" role="button" className="w1">
                            Registrar
                        </button>
                    </Link>
                    <button className="cta" type="submit">
                        {formState.loadingState ? (
                            <ComponentSpinner />
                        ) : (
                            "Enviar"
                        )}
                    </button>
                </div>
            </form>
        </>
    );
}
