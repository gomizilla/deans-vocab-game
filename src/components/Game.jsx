import React from "react";
import "./Game.css";
import server from "../util/dataFromServer";

export default function Game() {
    console.log("server check: ", server.server);
    return (
        <div className="game-container">
            <h1 className="game-header">GAME AREA</h1>
            <div className="game-wrapper-container"></div>
        </div>
    );
}