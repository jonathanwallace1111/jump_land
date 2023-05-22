import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "../GameContext";
import IntroTitleCard from "../Components/IntroTitleCard";
import MainMenu from "../Components/MainMenu";
import Dojo from "../Components/Dojo";
import LevelBuilder from "../Components/LevelBuilder";
import LevelSelect from "../Components/LevelSelect";
import Options from "../Components/Options";
import { Router } from "react-router-dom";

export default function App() {

    const baseUrl = "http://localhost:8080"

    return (
        <Router basename={baseUrl}>
            getView()
        </Router>
    )
};