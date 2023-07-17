import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "../Contexts/GameContext.jsx";

export default function ChangeCurrentViewButton() { 
    const gameContext = useContext(GameContext)

    return (
        <div>
            <h1 onClick={() => gameContext.setCurrentView(gameContext.currentViewOptions.mainMenu)}>
                Back to Main Menu
            </h1>
        </div>
    )
}