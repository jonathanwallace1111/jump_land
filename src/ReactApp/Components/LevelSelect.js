import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "../GameContext";
import ChangeCurrentViewButton from "./ChangeCurrentViewButton"; 

export default function LevelSelect() { 
    const gameContext = useContext(GameContext)

    return <ChangeCurrentViewButton /> 
}