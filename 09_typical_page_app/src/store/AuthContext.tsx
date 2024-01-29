import React, { useEffect, useState } from 'react';

function onLogin(email: string, password: string) { }
function onLogout() { }

const AuthContext = React.createContext({
    is_logged_in: false,
    onLogin,
    onLogout,
});

export const AuthContextProvider = (props: any) => {
    const [isLoggedIn, $isLoggedIn] = useState(false);

    const storage_is_logged_in = localStorage.getItem('is_logged_in');

    useEffect(() => {
        if (storage_is_logged_in === 'true') {
            $isLoggedIn(true);
        }
    }, [storage_is_logged_in]);

    const loginHandler = (email: string, password: string) => {
        $isLoggedIn(true);

        localStorage.setItem('is_logged_in', 'true');
    };

    const logoutHandler = () => {
        $isLoggedIn(false);

        localStorage.removeItem('is_logged_in');
    };

    return <AuthContext.Provider value={{
        is_logged_in: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
    }}>{props.children}</AuthContext.Provider>
};

export default AuthContext;
