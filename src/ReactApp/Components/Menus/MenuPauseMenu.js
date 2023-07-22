import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import styles from './MenuPauseMenu.module.scss';
import { ControllerContext } from '../../Contexts/ControllerContext';

import { AppRoutePaths } from '../../ApplicationRoot/AppRoutes';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faCannabis, faGear, faJoint, faMartiniGlassCitrus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const COOLDOWN_TIME_MS = 250;

export function MenuPauseMenu() {

    const [menuOpen, setMenuOpen] = useState(false);

    const cooldownTime = useRef(new Date());

    const controller = useContext(ControllerContext);

    useEffect(() => {

        if (!menuOpen && controller.start) {
            cooldownTime.current = new Date();
            setMenuOpen(true);
        } else if (menuOpen && controller.start && new Date() - cooldownTime.current > COOLDOWN_TIME_MS) {
            cooldownTime.current = new Date();
            setMenuOpen(false);
        }


    }, [controller])

    const links = [
        {
            "icon": faJoint,
            "name": "Main Menu",
            "path": AppRoutePaths.MainMenu
        },
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
            "name": "Settings",
            "path": AppRoutePaths.Settings
        }
    ]

    const onLinkClick = (e) => {
        setMenuOpen(false);
    }


    return (
        <div className={`${styles.menuPauseMenu} ${menuOpen ? styles.active : styles.inactive}`}>
            <div className={styles.veil} />
            <div className={styles.title}>{"jump_land"}</div>
            <div className={styles.options}>
            {
                links.map(link => (
                    <Link
                        key={`menu-pause-menu-link-${link.name.split(" ").join("")}`}
                        className={styles.linkOuter}
                        to={link.path}
                        onClick={onLinkClick}
                    >
                        {link.icon && <FontAwesomeIcon className={styles.linkIcon} icon={link.icon} />}
                        <div className={styles.linkName}>{link.name}</div>
                    </Link>
                ))
            }
            </div>
        </div>
    )
}