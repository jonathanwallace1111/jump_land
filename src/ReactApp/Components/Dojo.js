import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "../GameContext";
import ChangeCurrentViewButton from "./ChangeCurrentViewButton"; 

export default function Dojo() { 
    const gameContext = useContext(GameContext)

    //

    return <ChangeCurrentViewButton /> 
}