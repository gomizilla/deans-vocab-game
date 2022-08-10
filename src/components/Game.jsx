import React, { useEffect, useState } from "react";
import "./Game.css";
import server from "../util/dataFromServer";

export default function Game() {
    // console.log("server check: ", server.server);

    const [wordScramble, setWordScramble] = useState(false);
    const [secretWord, setSecretWord] = useState(false);
    const [multiChoice, setMultiChoice] = useState(false);

    // const handleGameUpdate = (e) => {
    //     e.preventDefault(); // not sure what this is for
    //     const wordScrambleBtn = document.getElementById("word-scramble");
    //     const wordleBtn = document.getElementById("wordle");
    //     const multiChoiceBtn = document.getElementById("multi-choice");
    // }

    const handleWordScramble = () => {
        console.log("word scramble btn clicked");
        setWordScramble(true);
        setSecretWord(false);
        setMultiChoice(false);
    }
    const handleSecretWord = () => {
        console.log("secret word btn clicked");
        setWordScramble(false);
        setSecretWord(true);
        setMultiChoice(false);
    }
    const handleMultiChoice = () => {
        console.log("multi choice btn clicked");
        setWordScramble(false);
        setSecretWord(false);
        setMultiChoice(true);
    }

    console.log("word: ", wordScramble, "secret: ", secretWord, "multi: ", multiChoice);

    return (
        <div className="game-container">
            <h1 className="game-header">GAME AREA</h1>
            <div className="games">
                <button id="word-scramble" onClick={handleWordScramble}>Word Scramble</button>
                <button id="wordle" onClick={handleSecretWord}>Secret Word</button>
                <button id="multi-choice" onClick={handleMultiChoice}>Multiple Choice</button>
            </div>
            <div className="game-wrapper-container">
                
            </div>
        </div>
    );
}