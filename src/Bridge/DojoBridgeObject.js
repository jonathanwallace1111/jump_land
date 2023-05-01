import React, { useState, useEffect, useContext} from "react";
import { GameContext } from "../ReactApp/GameContext";


export default class DojoBridgeObject {
    constructor(game) {
        this.game = game; 
        
        //Notice that I'm incorporating the context as a part of the class
        this.gameContext = useContext(GameContext) 

    }

    startDojo = () => {
        //initialize game.dojoManager
        //For now, I'm going to name the dojoManager function that this relates to startDojo
    }

    stopDojo = () => {
        //Shut down game
        //For now, I'm going to name the dojoManager function that this relates to stopDojo

    }

    pauseGame = () => {
        //The dojoManager function this relates to is also called pauseGame
        //Needs to switch from game.controlsManager to the react side controls 
    }

    unpauseGame = () => {
        //The dojoManager function this relates to is also called unpauseGame
        //Needs to switch from react side controls, back to game.controlsManager 
    }
}