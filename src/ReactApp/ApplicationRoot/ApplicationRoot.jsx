import GameContextProvider from "../GameContext.jsx";
import App from "./App";

export function ApplicationRoot() {

    return (
            <GameContextProvider>
                <App />
            </GameContextProvider>
    );
}