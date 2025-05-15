import React, { useEffect, useState } from "react";

function onLogin(email: string, password: string) {}
function onLogout() {}

const AuthContext = React.createContext({
  is_logged_in: false,
  onLogin,
  onLogout,
});

export default AuthContext;
