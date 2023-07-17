import React, { useState, useEffect, useContext, useRef, useMemo } from "react";
import { GameContext } from "../Contexts/GameContext.jsx";
import Game from "../../GameEngine/System/Game"; 

export default function Dojo() { 
    const gameContext = useContext(GameContext)
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            gameContext.newGame(ctx);
        }

    }, [canvasRef.current]); 

    return <canvas ref={canvasRef} width={1500} height={800} />
}