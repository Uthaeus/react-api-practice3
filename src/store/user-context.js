import { useState, createContext } from "react";

export const UserContext = createContext({
    user: null,
    isAuthorized: false,
    userLogin: (userData) => {},
    userLogout: () => {}
});

function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    function userLogin(userData) {
        setUser(userData);
    }

    function userLogout() {
        setUser(null);
    }

    const context = {
        user,
        isAuthorized: !!user,
        userLogin,
        userLogout
    };

    return (
        <UserContext.Provider value={context}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;