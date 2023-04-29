import GameContextProvider from "../GameContext";
import App from "../../App";

export function ApplicationRoot() {

    return (
        <div>
            <GameContextProvider>
                <App />
            </GameContextProvider>
        </div>
    );
}