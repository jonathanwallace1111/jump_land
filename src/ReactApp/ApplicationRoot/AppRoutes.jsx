import { useLocation } from "react-router-dom";
import { Routes, Route } from 'react-router';
import IntroTitleCard from "../Components/IntroTitleCard";
import MainMenu from "../Components/MainMenu/MainMenu";
import Dojo from "../Components/Dojo";
import LevelBuilder from "../Components/LevelBuilder";
import LevelSelect from "../Components/LevelSelect";
import { SettingsPage } from "../Components/Settings/SettingsDisplay";

export const AppRoutePaths = {
    Intro: "/introTitleCard",
    MainMenu: "/mainMenu",
    Dojo: "/dojo",
    LevelBuilder: "/levelBuilder",
    LevelSelect: "/levelSelect",
    Settings: "/settings",
    Default: "/",
}

export function AppRoutes() {

    const location = useLocation("/");

    return (
        <Routes>
            <Route
                key={location.key}
                path={AppRoutePaths.Intro}
                element={<IntroTitleCard />}
            />
            <Route
                key={location.key}
                path={AppRoutePaths.MainMenu}
                element={<MainMenu />}
            />
            <Route
                key={location.key}
                path={AppRoutePaths.Dojo}
                element={<Dojo />}
            />
            <Route
                key={location.key}
                path={AppRoutePaths.LevelBuilder}
                element={<LevelBuilder />}
            />
            <Route
                key={location.key}
                path={AppRoutePaths.LevelSelect}
                element={<LevelSelect />}
            />
            <Route
                key={location.key}
                path={AppRoutePaths.Settings}
                element={<SettingsPage />}
            />
            <Route
                key={location.key}
                path={"*"}
                element={<MainMenu />}
            />
        </Routes>
    )
}