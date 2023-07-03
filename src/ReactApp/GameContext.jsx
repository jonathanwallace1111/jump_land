import React, { useState, useEffect, useRef } from "react";
import Game from "../GameEngine/System/Game";

export const GameContext = React.createContext({});

export default function GameContextProvider({ children }){

    const providerValueRef = useRef({})


    const [currentGame, setCurrentGame] = useState(null);
    const newGame = (ctx) => {

        const game = new Game(ctx, providerValueRef.current);
        game.init();
        game.controls.setupInGameControls();
        game.gameLoop();

        setCurrentGame(game)
    }

    providerValueRef.current.newGame = newGame;
    providerValueRef.current.currentGame = currentGame;

    return (
        <GameContext.Provider value={providerValueRef.current}>
            {children}
        </GameContext.Provider>
    );
}