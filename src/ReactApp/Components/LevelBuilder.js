import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "../GameContext.jsx";
import ChangeCurrentViewButton from "./ChangeCurrentViewButton"; 

export default function LevelBuilder() { 
    const gameContext = useContext(GameContext)

    return <ChangeCurrentViewButton /> 
}