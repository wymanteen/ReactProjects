import { createContext } from "react";

export const ReferenceLoginContext = createContext({
    authenticated: false,
    setAuthenticated: (auth) => {}
});