import React, { useState, useEffect, useContext, useRef, useMemo } from "react";
import { GameContext } from "../GameContext.jsx";
import Game from "../../GameEngine/System/Game"; 

export default function Dojo() { 
    const gameContext = useContext(GameContext)
    const canvasRef = useRef(null);
    const [ctx, setCtx] = useState(null);
    const [game, setGame] = useState(null);

    useEffect(() => {
        if (canvasRef.current) {
            setCtx(() => {
                const newCtx = canvasRef.current.getContext('2d');
                setGame(new Game(newCtx, gameContext))
            })
        }

    }, [canvasRef.current]); 

    useEffect(() => {
        if (canvasRef.current && game) {
            game.init();
            game.controls.setupInGameControls()
            game.gameLoop(); 

            return () => {
                game.controls.removeInGameControls();
            }
        }
    }, [game]);

    useEffect(() => {
        if (canvasRef.current && game) {
            game.updateReactBridge(gameContext);
        }
    }, [gameContext]);

    return <canvas ref={canvasRef} width={1500} height={800} />
}