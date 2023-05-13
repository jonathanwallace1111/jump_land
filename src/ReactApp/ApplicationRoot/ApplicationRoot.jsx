import GameContextProvider from "../GameContext";
import App from "../../App";

export function ApplicationRoot() {

    return (
            <GameContextProvider>
                <App />
            </GameContextProvider>
    );
}