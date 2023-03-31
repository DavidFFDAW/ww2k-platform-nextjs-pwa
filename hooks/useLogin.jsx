import React from 'react';
import { useRouter } from 'next/router';
import { postRequest } from 'services/http.service';
import { useUserContext } from '@/context/UserContext';
import config from '@/constants/config';
import CookieService from '@/services/cookie.service';
import { getEndpoint } from '@/utils/server.utils';

export default function useLogin() {
    const router = useRouter();
    const { _, setUser } = useUserContext();

    const [formData, setFormData] = React.useState({ email: '', password: '' });

    const setUserEmail = ev => setFormData({ ...formData, email: ev.target.value });
    const setUserPassword = ev =>
        setFormData({ ...formData, password: ev.target.value });

    const submitLogin = async event => {
        event.preventDefault();
        const { email, password } = formData;

        const response = await postRequest(getEndpoint('auth/login'), {
            email,
            password,
        });

        if (Boolean(response.token)) {
            CookieService.save(config.NEXT_USER, JSON.stringify(response));

            console.log('LOGIN response', response);
            setUser(response);

            const redirectionPath = response.type === 'admin' ? '/admin' : '/user';
            router.push(redirectionPath);
        }
    };

    return { setUserEmail, setUserPassword, submitLogin };
}
