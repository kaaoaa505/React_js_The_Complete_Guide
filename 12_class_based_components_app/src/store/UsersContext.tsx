import React from "react";

const UsersContext = React.createContext({
    showUsers: true,
    searchTerm: '',
    users: []
});

export default UsersContext;