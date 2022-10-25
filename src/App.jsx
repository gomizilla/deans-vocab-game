import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Game from "./components/Game";

export default function App() {
    const [currentGame, setCurrentGame] = useState();

    return (
        <div className="App">
            <Header />
            <Game 
                setCurrentGame={setCurrentGame}
                currentGame={currentGame}
            />
        </div>
    );
}