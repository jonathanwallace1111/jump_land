import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "./ReactApp/GameContext";
import IntroTitleCard from "./ReactApp/Components/IntroTitleCard";
import MainMenu from "./ReactApp/Components/MainMenu";
import Dojo from "./ReactApp/Components/Dojo";
import LevelBuilder from "./ReactApp/Components/LevelBuilder";
import LevelSelect from "./ReactApp/Components/LevelSelect";
import Options from "./ReactApp/Components/Options";

export default function App() {
    const gameContext = useContext(GameContext)

    const getView = () => {
        switch (gameContext.currentView) {
            case 'introTitleCard':
                return <IntroTitleCard /> 
                // break;
            case 'mainMenu':
                return <MainMenu /> 
                // break;
            case 'dojo':
                return <Dojo /> 
                // break;
            case 'levelBuilder':
                return <LevelBuilder /> 
                // break;
            case 'levelSelect':
                return <LevelSelect /> 
                // break;
            case 'options':
                return <Options /> 
                // break;
            default: 
                return <Dojo /> 
        }
    }

    return getView();
};