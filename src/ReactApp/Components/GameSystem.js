import React, { useState, useEffect, useContext} from "react";
import { IntroTitle } from "./IntroTitle";
import { MainMenu } from "./MainMenu"; 
import { GameContext } from "../GameContext";

export default function GameSystem() {
    const gameContext = useContext(GameContext)

    console.log(gameContext.currentDisplayMode); 

    return (
        <div>
            {gameContext.currentDisplayMode === "title" && (
                <IntroTitle /> 
            )}
            {gameContext.currentDisplayMode === "mainMenu" && (
                <MainMenu /> 
            )}
        </div>
    )
}