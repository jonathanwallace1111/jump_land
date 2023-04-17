import React, { useState, useEffect } from "react";

export const GameContext = React.createContext({});

export default function GameContextProvider({ children }){
    

    const displayModeTypes = {
        title: "title",
        mainMenu: "mainMenu",
        inGame: "inGame", 
        inGamePause: "inGamePause", 
        levelBuilder: "levelBuilder",
    }

    const [currentDisplayMode, setCurrentDisplayMode] = useState(displayModeTypes.title); 

    const removeTitleCardAndShowMenu = () => {
        setCurrentDisplayMode(displayModeTypes.mainMenu)
    }
    
    return (
        <GameContext.Provider value={{

            currentDisplayMode,
            
            removeTitleCardAndShowMenu
        
        }}>{children}</GameContext.Provider>
    );
}