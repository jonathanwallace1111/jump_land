import ControllerContextProvider from "../Contexts/ControllerContext.jsx";
import GameContextProvider from "../Contexts/GameContext.jsx";
import App from "./App";

export function ApplicationRoot() {

    return (
        <ControllerContextProvider>
            <GameContextProvider>
                <App />
            </GameContextProvider>
        </ControllerContextProvider>
    );
}