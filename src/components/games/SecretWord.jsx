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
    
    // const defaultBoard = testDefaultBoard;
    const [board, setBoard] = useState(defaultBoard);
    const [currentAttempt, setCurrentAttempt] = useState({round: 0, letterPos: 0});
    const [notUsed, setNotUsed] = useState([]);
    const [gameover, setGameover] = useState({gameover: false, guessedWord: false});
    const [totalAttempts, setTotalAttempts] = useState(0);
    const [secretWord, setSecretWord] = useState("");
    
    // const defaultBoard = testDefaultBoard;

    const secretWordAnswer = secretWord.toUpperCase();

    useEffect(() => {
        getSecretWord();
        handleSecretWord();
        // handleDefaultBoard();
    }, []);

    // console.log("secret word test ✅✅✅✅✅✅: ", getSecretWord("Bob Barker"));
    // console.log("secret word test ✅✅✅✅✅✅: ", secretWord);


    const onSelectLetter = (keyVal) => {
        if (currentAttempt.letterPos > 4) return; // change 5 to secretWordAnswer.length - 1 (?)
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
        if (currentAttempt.letterPos !== 5) return; // change 5 to secretWordAnswer.length 
        
        let currentWord = "";
        for (let i = 0; i < 5; i++) { // change 5 to secretWordAnswer.length 
            currentWord += board[currentAttempt.round][i];
        }
        console.log("current word: ", currentWord);
        
        if (secretWordAnswer === currentWord) {
            console.log("congrats you won!");
            setGameover({gameover: true, guessedWord: true});
            // return;
        } 
        
        if (secretWordAnswer !== currentWord) {
            console.log("Try again");
        }
        
        setCurrentAttempt({round: currentAttempt.round + 1, letterPos: 0});

        if (currentAttempt.round === 5 && gameover.guessedWord === false) {
            console.log("try again????????")
            // setTotalAttempts(totalAttempts+6)
            setBoard(defaultBoard);
            setCurrentAttempt({round: 0, letterPos: 0});
            // console.log("total attempts check: ", totalAttempts)
            // setCurrentAttempt({round: currentAttempt.round + 1, letterPos: 0});
        }
    }

    // console.log("total attempts check: ", totalAttempts);

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
        // console.log("board test 🙏🙏🙏🙏🙏🙏: ", board);
        setTestDefaultBoard(board);
    }
    // handleDefaultBoard();
    
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
                    {/* <Keyboard /> */}
                </div>
            </AppContext.Provider>
        </div>
    );
}