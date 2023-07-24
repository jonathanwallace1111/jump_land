import ControllerContextProvider from "../Contexts/ControllerContext.jsx";
import GameContextProvider from "../Contexts/GameContext.jsx";
import SaveDataContextProvider from "../Contexts/SaveDataContext.jsx";
import App from "./App";

export function ApplicationRoot() {

    return (
        <SaveDataContextProvider>
            <ControllerContextProvider>
                <GameContextProvider>
                    <App />
                </GameContextProvider>
            </ControllerContextProvider>
        </SaveDataContextProvider>
    );
}