import React, { useState, useEffect } from "react";

export const GameContext = React.createContext({});

export default function GameContextProvider({ children }){
    

    const currentViewOptions = {
        introTitleCard: "introTitleCard",
        mainMenu: "mainMenu",
        dojo: "dojo",
        levelBuilder: "levelBuilder",
        levelSelect: "levelSelect",
        options: "options",
        inGame: "inGame", 
        inGamePause: "inGamePause", 
    }

    const [currentView, setCurrentView] = useState(currentViewOptions.introTitleCard); 

    const removeTitleCardAndShowMenu = () => {
        setCurrentView(currentViewOptions.mainMenu)
    }
    
    return (
        <GameContext.Provider value={{

            currentView,
            currentViewOptions,
            
            setCurrentView, 
            removeTitleCardAndShowMenu
        
        }}>{children}</GameContext.Provider>
    );
}