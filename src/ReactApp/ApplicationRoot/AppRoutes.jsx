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
                path="/introTitleCard"
                element={<IntroTitleCard />}
            />
            <Route
                key={location.key}
                path="/mainMenu"
                element={<MainMenu />}
            />
            <Route
                key={location.key}
                path="/dojo"
                element={<Dojo />}
            />
            <Route
                key={location.key}
                path="/levelBuilder"
                element={<LevelBuilder />}
            />
            <Route
                key={location.key}
                path="/levelSelect"
                element={<LevelSelect />}
            />
            <Route
                key={location.key}
                path="/options"
                element={<Options />}
            />
            <Route
                key={location.key}
                path="*"
                element={<Dojo />}
            />
        </Routes>
    )
}