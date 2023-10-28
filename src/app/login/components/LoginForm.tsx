"use client";
import Link from "next/link";
import React from "react";
// import { signIn, useSession } from "next-auth/react";
import { ComponentSpinner } from "@/components/Spinner/Spinner";
import { FormErrorMessage } from "./FormErrorMessage";
import useLogin from "./useLogin";

export default function LoginForm() {
    const { formState, setFormState, submitForm } = useLogin();

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
