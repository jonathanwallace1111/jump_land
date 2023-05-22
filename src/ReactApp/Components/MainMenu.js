import React, { useContext, useEffect } from "react";
import { GameContext } from "../GameContext.jsx";

export default function MainMenu() {
    const gameContext = useContext(GameContext)

    return (
        <div>
            <h1 onClick={() => gameContext.setCurrentView(gameContext.currentViewOptions.dojo)}>dojo</h1>
            <h1 onClick={() => gameContext.setCurrentView(gameContext.currentViewOptions.levelBuilder)}>level builder</h1>
            <h1 onClick={() => gameContext.setCurrentView(gameContext.currentViewOptions.levelSelect)}>level select</h1>
            <h1 onClick={() => gameContext.setCurrentView(gameContext.currentViewOptions.options)}>options</h1>
        </div>
    )
}