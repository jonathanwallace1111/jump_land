import React, { useState, useEffect, useRef } from "react";
import Game from "../../GameEngine/System/Game";

export const ControllerContext = React.createContext({});

export const KEYCODE_MAP = {
    65: "left",
    37: "left",
    68: "right",
    39: "right",
    87: "up",
    88: "up",
    83: "down",
    40: "down",
    69: "a",
    81: "b",
    82: "x",
    70: "y",
    9: "start",
    16: "select",
}

export default function ControllerContextProvider({ children }) {

    const [controller, setController] = useState({
        left: false,
        right: false,
        up: false,
        down: false,
        a: false,
        b: false,
        x: false,
        y: false,
        start: false,
        select: false,
    });


    const onKeyDown = (e) => {

        const key = e.keyCode;

        if (key in KEYCODE_MAP) {
            e.preventDefault();

            if (!controller[KEYCODE_MAP[key]]) {
                setController({
                    ...controller,
                    [KEYCODE_MAP[key]]: true,
                });
            }
        }
    }

    const onKeyUp = (e) => {
        const key = e.keyCode;

        if (key in KEYCODE_MAP) {
            e.preventDefault();

            if (controller[KEYCODE_MAP[key]]) {
            setController({
                ...controller,
                [KEYCODE_MAP[key]]: false,
            });
        }
        }
    }



    useEffect(() => {
        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("keyup", onKeyUp);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("keyup", onKeyUp);
        };
    }, []);


    return (
        <ControllerContext.Provider value={controller}>
            {children}
        </ControllerContext.Provider>
    );
}