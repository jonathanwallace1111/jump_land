import React, { useContext, useEffect } from "react";
import { GameContext } from "../../GameContext.jsx";
import { Link } from "react-router-dom";

import { AppRoutePaths } from '../../ApplicationRoot/AppRoutes';

import styles from "./MainMenu.module.scss";

export default function MainMenu() {
    const gameContext = useContext(GameContext)



    return (
        <div>
            <Link className={styles.linkOuter} to={AppRoutePaths.Dojo}><h1>Dojo</h1></Link>
            <Link className={styles.linkOuter} to={AppRoutePaths.LevelBuilder}><h1>Level Builder</h1></Link>
            <Link className={styles.linkOuter} to={AppRoutePaths.LevelSelect}><h1>Level Select</h1></Link>
            <Link className={styles.linkOuter} to={AppRoutePaths.Options}><h1>Options</h1></Link>
        </div>
    )
}