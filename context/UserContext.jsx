import React from "react";

export const UserContext = React.createContext();

export default function UserContextProvider({ children }) {
    const [user, setUser] = React.useState(false);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return React.useContext(UserContext);
}