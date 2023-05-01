import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "../GameContext";
import DojoBridgeObject from "../../Bridge/DojoBridgeObject";
import Game from "../../GameEngine/System/Game"; 
import ChangeCurrentViewButton from "./ChangeCurrentViewButton"; 

export default function Dojo() { 
    const gameContext = useContext(GameContext)

    useEffect(() => {
        const game = new Game(); 
        const bridge = new DojoBridgeObject(game);  

        bridge.startDojo(); 

        return () => {
            bridge.stopDojo(); 
        }
    }, []); 


    return <ChangeCurrentViewButton /> 
}