import { createContext } from "react";

export const ReferenceAllCardsContext = createContext({
    allCards: [],
    setAllCards: (newAllCards) => {}
});