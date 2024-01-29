import React from 'react';

const AuthContext = React.createContext({
    is_logged_in: false,
});

export default AuthContext;