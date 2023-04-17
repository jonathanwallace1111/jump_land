import GameContextProvider from "../GameContext";
import GameSystem from "../Components/GameSystem";

export function ApplicationRoot() {

    return (
        <div>
            <GameContextProvider>
                <GameSystem />
            </GameContextProvider>
        </div>
    );
}