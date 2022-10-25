import React, {useState, useEffect, createContext} from "react";
import Board from "./secret_word_components/Board";
import Keyboard from "./secret_word_components/Keyboard";
import Gameover from "./secret_word_components/Gameover";
import Letter from "./secret_word_components/Letter";
import { getSecretWord } from "../../util/dataFromServer";
import "./SecretWord.css";

export const AppContext = createContext();

export default function SecretWord() {
    
    const [testDefaultBoard, setTestDefaultBoard] = useState([]);

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
    const [notUsed, setNotUsed] = useState([]);
    const [gameover, setGameover] = useState({gameover: false, guessedWord: false});
    const [totalAttempts, setTotalAttempts] = useState(0);
    const [secretWord, setSecretWord] = useState("");
    

    const secretWordAnswer = secretWord.toUpperCase();

    useEffect(() => {
        getSecretWord();
        handleSecretWord();
    }, []);

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
        if (currentAttempt.letterPos === 5) {
            setTotalAttempts(totalAttempts+1);
        }
        if (currentAttempt.letterPos !== 5) return; 
        
        let currentWord = "";
        for (let i = 0; i < 5; i++) { 
            currentWord += board[currentAttempt.round][i];
        }
        
        if (secretWordAnswer === currentWord) {
            setGameover({gameover: true, guessedWord: true});
        } 
        
        setCurrentAttempt({round: currentAttempt.round + 1, letterPos: 0});

        if (currentAttempt.round === 5 && gameover.guessedWord === false) {
            setBoard(defaultBoard);
            setCurrentAttempt({round: 0, letterPos: 0});
        }
    }

    const handleSecretWord = () => {
        setSecretWord(getSecretWord("Bob Barker"));
    }

    const handleDefaultBoard = () => {
        let boardSize = secretWord.length;
        let board = [];
        for (let i = 0; i < 6; i++) {
            let tempArr = [];
            for (let j = 0; j < boardSize; j++) {
                tempArr.push("");
            }
            board.push(tempArr);
        }
        setTestDefaultBoard(board);
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
                    secretWordAnswer,
                    notUsed,
                    setNotUsed,
                    gameover,
                    setGameover,
                    totalAttempts
                    }}
            >
                <div className="game">
                    <Board />
                    {gameover.gameover ? <Gameover /> : <Keyboard />}
                </div>
            </AppContext.Provider>
        </div>
    );
}