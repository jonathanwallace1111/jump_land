import { useContext, useEffect } from "react";
import { GameContext } from "../GameContext";

export function IntroTitle() {

    const gameContext = useContext(GameContext); 
 
    useEffect(() => {
        const timer = setTimeout(() => {
          gameContext.removeTitleCardAndShowMenu(); 
        }, 1500);

    }, []);

    return (
        <div className={"IntroTitle"}>
            <h1>GAY</h1>
        </div>
    );
}