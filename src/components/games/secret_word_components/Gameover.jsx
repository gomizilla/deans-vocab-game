import React from "react";
import { useContext } from "react";
import { AppContext } from "../SecretWord";

export default function Gameover() {
    const {gameover, setGameover, secretWordAnswer, currentAttempt, totalAttempts} = useContext(AppContext);
    // console.log("currentattempt.rounds", currentAttempt.round);
    return (
        <div className="gameover">
            <h3> {gameover.guessedWord ? "Correct!" : "Try again"}</h3>
            <h1>Secret Word: {secretWordAnswer}</h1>
            {gameover.guessedWord && (<h3> You guessed in {totalAttempts} attempts</h3>)}
        </div>
    )
}