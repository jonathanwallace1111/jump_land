import { useLocation } from "react-router-dom";
import { Routes, Route } from 'react-router';
import IntroTitleCard from "../Components/IntroTitleCard";
import MainMenu from "../Components/MainMenu";
import Dojo from "../Components/Dojo";
import LevelBuilder from "../Components/LevelBuilder";
import LevelSelect from "../Components/LevelSelect";
import Options from "../Components/Options";

export function AppRoutes() {

    const location = useLocation("/");

    return (
        <Routes>
            <Route
                key={location.key}
                pathname="/introTitleCard"
                element={<IntroTitleCard />}
            />
            <Route
                key={location.key}
                pathname="/mainMenu"
                element={<MainMenu />}
            />
            <Route
                key={location.key}
                pathname="/dojo"
                element={<Dojo />}
            />
            <Route
                key={location.key}
                pathname="/levelBuilder"
                element={<LevelBuilder />}
            />
            <Route
                key={location.key}
                pathname="/levelSelect"
                element={<LevelSelect />}
            />
            <Route
                key={location.key}
                pathname="/options"
                element={<Options />}
            />
            <Route
                key={location.key}
                pathname="*"
                element={<Dojo />}
            />
        </Routes>
    )
}