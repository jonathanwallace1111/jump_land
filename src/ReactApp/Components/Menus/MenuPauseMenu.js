import { useContext, useEffect, useState } from 'react';
import styles from './MenuPauseMenu.module.scss';
import { ControllerContext } from '../../Contexts/ControllerContext';

import { AppRoutePaths } from '../../ApplicationRoot/AppRoutes';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faCannabis, faGear, faMartiniGlassCitrus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function MenuPauseMenu() {

    const [menuOpen, setMenuOpen] = useState(false);

    const controller = useContext(ControllerContext);

    useEffect(() => {
        console.log(menuOpen, controller.start);

        if (!menuOpen && controller.start) {
            setMenuOpen(true);
        }


    }, [controller])

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

    const onLinkClick = (e) => {
        setMenuOpen(false);
    }


    return (
        <div className={`${styles.menuPauseMenu} ${menuOpen ? styles.active : styles.inactive}`}>
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
    )
}