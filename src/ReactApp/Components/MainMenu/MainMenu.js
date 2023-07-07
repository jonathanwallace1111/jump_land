import React, { useContext, useEffect } from "react";
import { GameContext } from "../../GameContext.jsx";
import { Link } from "react-router-dom";

import { AppRoutePaths } from '../../ApplicationRoot/AppRoutes';

import styles from "./MainMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faCannabis, faGear, faMartiniGlassCitrus } from "@fortawesome/free-solid-svg-icons";


export default function MainMenu() {

    const links = [
        {
            "icon": faCannabis,
            "name": "Dojo",
            "path": AppRoutePaths.Dojo
        },
        {
            "icon": faMartiniGlassCitrus,
            "name": "Level Builder",
            "path": AppRoutePaths.LevelBuilder
        },
        {
            "icon": faBurger,
            "name": "Level Select",
            "path": AppRoutePaths.LevelSelect
        },
        {
            "icon": faGear,
            "name": "Options",
            "path": AppRoutePaths.Options
        }
    ]

    return (
        <div className={styles.mainMenuBackground}>
            <div className={styles.mainMenuCard}>
                <div className={styles.mainMenuTitle}>{"jump_land"}</div>
                <div className={styles.mainMenuOptions}>
                    {
                        links.map(link => (
                            <Link
                                key={`main-menu-link-${link.name.split(" ").join("")}`}
                                className={styles.linkOuter}
                                to={link.path}
                            >
                                {link.icon && <FontAwesomeIcon className={styles.linkIcon} icon={link.icon} />}
                                <div className={styles.linkName}>{link.name}</div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}