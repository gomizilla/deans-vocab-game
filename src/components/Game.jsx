import React, { useEffect, useState } from "react";
import "./Game.css";
import SecretWord from "./games/SecretWord";
import WordScramble from "./games/WordScramble";
import server from "../util/dataFromServer";
import { getAllVocab } from "../util/dataFromServer";

export default function Game(props) {

    const [wordScramble, setWordScramble] = useState(false);
    const [secretWord, setSecretWord] = useState(false);
    const [multiChoice, setMultiChoice] = useState(false);
    const [vocabList, setVocabList] = useState();

    useEffect(() => {
        getAllVocab();
        getVocabList();
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

    const getVocabList = async () => {
        const list = await getAllVocab();
        setVocabList(list.data);
    }

    const handleWordScramble = () => {
        setWordScramble(true);
        setSecretWord(false);
        setMultiChoice(false);
        props.setCurrentGame("Word Scramble");
    }
    const handleSecretWord = () => {
        setWordScramble(false);
        setSecretWord(true);
        setMultiChoice(false);
        props.setCurrentGame("Secret Word");
    }
    const handleMultiChoice = () => {
        setWordScramble(false);
        setSecretWord(false);
        setMultiChoice(true);
        props.setCurrentGame("Multiple Choice");
    }


    return (
        <div className="game-container">
            <h1 className="game-header">{props.currentGame ? props.currentGame : "Choose Your Game:"}</h1>
            <div className="games">
                <button id="word-scramble" onClick={handleWordScramble}>Word Scramble</button>
                <button id="wordle" onClick={handleSecretWord}>Secret Word</button>
            </div>
            <div className="game-wrapper-container">
                {secretWord && <SecretWord />}
                {wordScramble && <WordScramble vocabList={vocabList} wordScramble={wordScramble} currentGame={props.currentGame}/>}
                
            </div>
        </div>
    );
}