import React, {useState, useEffect, createContext} from "react";
import Board from "./secret_word_components/Board";
import Keyboard from "./secret_word_components/Keyboard";
import Letter from "./secret_word_components/Letter";
import "./SecretWord.css";

export const AppContext = createContext();

export default function SecretWord() {
    
    const defaultBoard = [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
    ];

    const [board, setBoard] = useState(defaultBoard);
    const [currentAttempt, setCurrentAttempt] = useState({round: 0, letterPos: 0});

    const secretWordAnswer = "BUTTS";

    const onSelectLetter = (keyVal) => {
        if (currentAttempt.letterPos > 4) return;
        const currentBoard = [...board];
        currentBoard[currentAttempt.round][currentAttempt.letterPos] = keyVal;
        setBoard(currentBoard);
        setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos + 1});
    }

    const onDelete = () => {
        if (currentAttempt.letterPos === 0) return;
        const currentBoard = [...board];
        currentBoard[currentAttempt.round][currentAttempt.letterPos - 1] = "";
        setBoard(currentBoard);
        setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos - 1});
    }

    const onEnter = () => {
        if (currentAttempt.letterPos !== 5) return;
        setCurrentAttempt({round: currentAttempt.round + 1, letterPos: 0});
    }

    
    return (
        <div className="secret-word">
            <AppContext.Provider 
                value={{ 
                    board, 
                    setBoard, 
                    currentAttempt, 
                    setCurrentAttempt, 
                    onSelectLetter, 
                    onEnter, 
                    onDelete,
                    secretWordAnswer
                    }}
            >
                <div className="game">
                    <Board />
                    <Keyboard />
                </div>
            </AppContext.Provider>
        </div>
    );
}