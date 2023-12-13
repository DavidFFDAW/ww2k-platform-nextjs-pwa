'use client';
import { useCookiesContext } from '@/context/CookiesContext';
import { TOKEN_COOKIE } from '@/constants/config';
import { verifyJwtToken } from '@/utilities/jwt';

export default function useCookies() {
    const { cookies, setCookies } = useCookiesContext();

    const setSingleCookie = (name: string, value: string) => {
        return setCookies((currentCookies: any) => ({
            ...currentCookies,
            [name]: value
        }))
    };

    const getUserToken = () => cookies[TOKEN_COOKIE] || false;

    const getDecodedToken = () => {
        const token = getUserToken();
        if (!token) return false;
        return verifyJwtToken(token);
    }

    return {
        cookies,
        getUserToken,
        getDecodedToken,
        setSingleCookie,
    }
}
