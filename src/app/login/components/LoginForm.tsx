'use client';
import Link from 'next/link';
import React from 'react'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ComponentSpinner } from '@/app/components/Spinner/Spinner';

interface FormState {
    visiblePassword: boolean;
    loadingState: boolean;
}

const initialFormState: FormState = {
    visiblePassword: false,
    loadingState: false,
}

export default function LoginForm() {

    const router = useRouter();
    const session = useSession();
    const [formState, setFormState] = React.useState<FormState>(initialFormState);

    if (session.status === 'authenticated') router.push('/admin');


    const submitForm = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const form = new FormData(ev.currentTarget);

        try {
            setFormState(previous => ({ ...previous, loadingState: true }));
            const response = await signIn('credentials', {
                email: form.get('login_email'),
                password: form.get('login_password'),
                redirect: false,
            });
            setFormState(previous => ({ ...previous, loadingState: false }));

            console.log({ response });

            const isError = Boolean(response?.error) && response?.status !== 200 && !response?.ok;
            if (!isError) return router.push('/admin');
        } catch (error: any) {
            console.warn({ error });
        }
    }

    return (
        <>
            <form onSubmit={ev => submitForm(ev)} method="POST">
                <div className="flex center gap column al-start" style={{ height: '205px' }}>
                    <input
                        type="text"
                        name='login_email'
                        placeholder="example@email.com"
                        autoComplete="email"
                        aria-autocomplete="list"
                        className="w1 app-custom-input"
                        required
                    />

                    <div className="w1 flex between">
                        <input
                            name='login_password'
                            type={formState.visiblePassword ? 'text' : 'password'}
                            placeholder="Password"
                            className="w1 app-custom-input nradius"
                            autoComplete="current-password"
                            aria-autocomplete="list"
                            required
                        />


                        <button className="nradius pointer" type="button" role="button" onClick={() => setFormState(previous => ({ ...previous, visiblePassword: !previous.visiblePassword }))}>
                            {formState.visiblePassword ? 'Ocultar' : 'Mostrar'}
                        </button>
                    </div>

                    <a href="#forgot">He olvidado mi contraseña</a>
                </div>

                <div className="w1 flex between row">
                    <Link href={'/register'}>
                        <button type="button" role="button" className="w1">
                            Registrar
                        </button>
                    </Link>
                    <button className="cta" type="submit">
                        {formState.loadingState ? <ComponentSpinner /> : 'Enviar'}
                    </button>
                </div>
            </form>
        </>
    )
}
