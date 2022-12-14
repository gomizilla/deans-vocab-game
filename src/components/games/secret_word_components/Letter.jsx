import React, {useContext} from "react";
import { useEffect } from "react";
import { AppContext } from "../SecretWord";

export default function Letter({letterPos, round}) {
    const { board, secretWordAnswer, currentAttempt, notUsed, setNotUsed } = useContext(AppContext);
    const letter = board[round][letterPos];

    const correct = secretWordAnswer[letterPos] === letter;
    const almost = !correct && letter !== "" && secretWordAnswer.includes(letter);

    const letterState = currentAttempt.round > round && (correct ? "correct" : almost ? "almost" : "error");

    useEffect(() => {
        if (letter !== "" && !correct && !almost) {
            setNotUsed((prev) => [...prev, letter]);
        }
    }, [currentAttempt.round])

    return (
        <div className="letter" id={letterState}>{letter}</div>
    )
}