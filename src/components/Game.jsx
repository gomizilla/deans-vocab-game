import React, { useEffect, useState } from "react";
import "./Game.css";
import SecretWord from "./games/SecretWord";
import WordScramble from "./games/WordScramble";
import server from "../util/dataFromServer";
import { getAllVocab } from "../util/dataFromServer";

export default function Game(props) {
    // console.log("server check: ", server.server);

    // const {setCurrentGame} = props;

    const [wordScramble, setWordScramble] = useState(false);
    const [secretWord, setSecretWord] = useState(false);
    const [multiChoice, setMultiChoice] = useState(false);
    const [vocabList, setVocabList] = useState(server.server);

    useEffect(() => {
        getAllVocab();
    }, []);

    useEffect(() => {
        if(props.currentGame === "Word Scramble") setWordScramble(true)
    }, [props.currentGame]);

    useEffect(() => {
        if(props.currentGame === "Secret Word") setSecretWord(true)
    }, [props.currentGame]);

    useEffect(() => {
        if(props.currentGame === "Multiple Choice") setMultiChoice(true)
    }, [props.currentGame]);

    const [isLoaded, setIsLoaded] = useState(false);

    // console.log("vocab list check: ", vocabList);

    // const secretWordRef = useRef(null);

    // const handleGameUpdate = (e) => {
    //     e.preventDefault(); // not sure what this is for
    //     const wordScrambleBtn = document.getElementById("word-scramble");
    //     const wordleBtn = document.getElementById("wordle");
    //     const multiChoiceBtn = document.getElementById("multi-choice");
    // }

    const getVocabList = async () => {
        const list = await getAllVocab();
        console.log("heroku list test: ", list);
    }

    const handleWordScramble = () => {
        console.log("word scramble btn clicked");
        setWordScramble(true);
        setSecretWord(false);
        setMultiChoice(false);
        props.setCurrentGame("Word Scramble");
    }
    const handleSecretWord = () => {
        console.log("secret word btn clicked");
        setWordScramble(false);
        setSecretWord(true);
        setMultiChoice(false);
        props.setCurrentGame("Secret Word");
    }
    const handleMultiChoice = () => {
        console.log("multi choice btn clicked");
        setWordScramble(false);
        setSecretWord(false);
        setMultiChoice(true);
        props.setCurrentGame("Multiple Choice");
    }

    console.log("word: ", wordScramble, "secret: ", secretWord, "multi: ", multiChoice);

    return (
        <div className="game-container">
            <h1 className="game-header">{props.currentGame ? props.currentGame : "Choose Your Game:"}</h1>
            <div className="games">
                <button id="word-scramble" onClick={handleWordScramble}>Word Scramble</button>
                <button id="wordle" onClick={handleSecretWord}>Secret Word</button>
                <button id="multi-choice" onClick={handleMultiChoice}>Multiple Choice</button>
            </div>
            <div className="game-wrapper-container">
                {/* <h1 className="game-wrapper-header"> Welcome </h1> */}
                {/* {props.currentGame === "Secret Word" ? <SecretWord /> : null } */}
                {/* <WordScramble vocabList={vocabList} wordScramble={wordScramble}/> */}
                {/* {wordScramble ? <WordScramble vocabList={vocabList} wordScramble={wordScramble}/> : null} */}
                {/* {secretWord ? <SecretWord /> : null} */}
                {/* {secretWord ? <SecretWord /> : <WordScramble vocabList={vocabList} wordScramble={wordScramble}/> } */}
                {/* {props.currentGame === "Word Scramble" && <WordScramble vocabList={vocabList} wordScramble={wordScramble}/>}
                {props.currentGame === "Secret Word" && <SecretWord />} */}
                {secretWord && <SecretWord />}
                {wordScramble && <WordScramble vocabList={vocabList} wordScramble={wordScramble} currentGame={props.currentGame}/>}
                
            </div>
        </div>
    );
}