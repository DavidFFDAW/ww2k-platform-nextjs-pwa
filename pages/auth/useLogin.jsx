import React from 'react';
import { useRouter } from 'next/router';
import { postRequest } from 'services/http.service';
import { useUserContext } from '@/context/UserContext';

export default function useLogin() {
    const router = useRouter();
    const { user, setUser } = useUserContext();

    React.useEffect(() => {
        if (Boolean(user)) {
            const redirectionPath =
                user.type === 'admin' ? '/admin/dashboard' : '/user';
            router.push(redirectionPath);
        }
    }, [router, user]);

    const [formData, setFormData] = React.useState({ email: '', password: '' });

    const setUserEmail = ev => setFormData({ ...formData, email: ev.target.value });
    const setUserPassword = ev =>
        setFormData({ ...formData, password: ev.target.value });

    const submitLogin = async event => {
        event.preventDefault();
        const { email, password } = formData;

        const response = await postRequest('http://localhost:3000/api/auth/login', {
            email,
            password,
        });
        console.log(response);

        if (Boolean(response.token)) {
            localStorage.setItem('next_auth_token', response.token);
            setUser(response);
            const redirectionPath =
                response.type === 'admin' ? '/admin/dashboard' : '/user';
            router.push(redirectionPath);
        }
    };

    return { setUserEmail, setUserPassword, submitLogin };
}
