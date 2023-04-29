import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "../GameContext";
import ChangeCurrentViewButton from "./ChangeCurrentViewButton"; 

export default function LevelBuilder() { 
    const gameContext = useContext(GameContext)

    return <ChangeCurrentViewButton /> 
}