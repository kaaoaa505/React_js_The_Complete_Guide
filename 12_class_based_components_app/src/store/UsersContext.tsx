// UsersContext.tsx
import React from "react";
import { UsersContextType } from "./UsersContextTypes";

const UsersContext = React.createContext<UsersContextType | undefined>(
  undefined
);

export default UsersContext;
