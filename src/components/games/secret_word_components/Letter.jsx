import React, {useContext} from "react";
import { AppContext } from "../SecretWord";

export default function Letter({letterPos, round}) {
    const { board, secretWordAnswer, currentAttempt } = useContext(AppContext);
    const letter = board[round][letterPos];
    console.log("letter: ", letter);

    const correct = secretWordAnswer[letterPos] === letter;
    const almost = !correct && letter !== "" && secretWordAnswer.includes(letter);
    // const wrong = 

    const letterState = currentAttempt.round > round && (correct ? "correct" : almost ? "almost" : "error");

    return (
        <div className="letter" id={letterState}>{letter}</div>
    )
}