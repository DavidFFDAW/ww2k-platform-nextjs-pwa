import config from '@/constants/config';
import React from 'react';

export const UserContext = React.createContext();

export default function UserContextProvider({ children }) {
    const [user, setUser] = React.useState(false);

    React.useEffect(() => {
        const isSetCookie = localStorage.getItem(config.NEXT_USER);
        const userObj = Boolean(isSetCookie) ? JSON.parse(isSetCookie) : false;

        if (Boolean(isSetCookie) || Boolean(userObj)) {
            setUser(userObj);
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return React.useContext(UserContext);
}
