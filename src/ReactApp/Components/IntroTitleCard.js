import { useContext, useEffect } from "react";
import { GameContext } from "../GameContext.jsx";

export default function IntroTitleCard() {

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