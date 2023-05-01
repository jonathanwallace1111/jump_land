import React, { useState, useEffect, useContext} from "react";
import { GameContext } from "../../GameContext";

const gameContext = useContext(GameContext) 

export default function DojoPauseMenu() {


    return (
        <div>
            <h1>unpause</h1>
            <h1>new dojo level</h1>
            <h1>stats</h1>
            <h1>main menu</h1>
        </div>
    )
}