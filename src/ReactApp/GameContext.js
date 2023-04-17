import React, { useState, useEffect } from "react";

export const GameContext = React.createContext({});

export default function GameContextProvider({ children }){
    return (
        <GameContext.Provider value={{

        }}>{children}</GameContext.Provider>
    );
}