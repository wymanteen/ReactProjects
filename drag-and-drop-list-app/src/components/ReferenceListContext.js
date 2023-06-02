import { createContext } from "react";

export const ReferenceListContext = createContext({
    listsUpdated: null,
    setListsUpdated: (updated) => {}
});