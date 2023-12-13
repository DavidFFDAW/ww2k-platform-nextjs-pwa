'use client';
import { getCookies } from "@/services/cookies.service";
import { createContext, useEffect, useContext, useState } from "react";

interface CookiesContextInterface {
    cookies: any;
    setCookies: any | React.Dispatch<React.SetStateAction<any>>;
}
const CookiesContext: React.Context<CookiesContextInterface> = createContext({
    cookies: {},
    setCookies: () => { }
});

export default function CookiesContextProvider({ children }: { children: React.ReactNode }) {
    const [cookies, setCookies] = useState<{}>({});

    useEffect(() => {
        setCookies(getCookies());
    }, []);

    return (
        <CookiesContext.Provider value={{ cookies, setCookies }}>
            {children}
        </CookiesContext.Provider>
    )
}

export const useCookiesContext = () => useContext(CookiesContext);

