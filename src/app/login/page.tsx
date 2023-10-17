'use client';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react';

export default function Login() {
    const router = useRouter();
    const session = useSession();
    const [error, setError] = React.useState<string | null>('');

    if (session.status === 'authenticated') router.push('/admin');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);

        if (!form.get('login_email') || !form.get('login_password'))
            return setError('Por favor, ingrese su correo y contraseña');

        try {
            const response = await signIn('credentials', {
                email: form.get('login_email'),
                password: form.get('login_password'),
                redirect: false,
            });

            console.log({ response });

            const isError = Boolean(response?.error) && response?.status !== 200 && !response?.ok;
            if (response?.error) return setError(response.error as string);
            if (!isError) return router.push('/admin');
        } catch (error: any) {
            setError(error.message as string);
        }
    };

    return (
        <div>
            <h2 className="dreadnotus font-700 upper">Iniciar sesion</h2>

            <form onSubmit={handleSubmit} className="w1 flex acenter column gap-medium">
                <input
                    className="w1 input"
                    type="email"
                    placeholder="abc@gmail.com"
                    name="login_email"
                    autoComplete="email"
                />
                <input
                    className="w1 input"
                    type="password"
                    placeholder="********"
                    name="login_password"
                    autoComplete="current-password"
                />

                <div className="w1 flex children between gap">
                    <a className="btn futura font-300" href="/" type="reset">
                        Volver
                    </a>
                    <button className="btn cta futura font-700" type="submit">
                        Iniciar sesión
                    </button>
                </div>
            </form>
        </div>
    )
}
