import React from "react";
import { useEffect, useState } from "react";
import "./WordScramble.css";

export default function WordScramble(props) {

    const [wordSearchList, setWordSearchList] = useState([]);
    const [wordSearchListScrambled, setWordSearchListScrambled] = useState([]);
    const [submittedWords, setSubmittedWords] = useState([]);
    const [wordListTest, setWordListTest] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        if (props.currentGame === "Word Scramble") {
            setIsLoaded(true);
        }
    })
    useEffect(() => {
        handleVocabList();
        scrambleWord(wordSearchList);
        handleScrambleWordList();
        testWordObj();
    }, [isLoaded]); 

    useEffect(() => { 
        if(wordSearchListScrambled.length > 0)
        testWordObj();
    }, [wordSearchListScrambled]);

    const handleVocabList = () => {
        const newList = [];

        for (let i = 0; i < 10; i++) {
            newList.push(props.vocabList[i].english_vocab);
        }
        setWordSearchList(newList);
    }

    const handleScrambleWordList = () => {
        const scrambledList = [];
        for (const word of wordSearchList) {
            scrambledList.push(scrambleWord(word));
        }
        setWordSearchListScrambled(scrambledList);
    }

    const scrambleWord = (word) => {
        let scramble = [];
        let newWord = [];
        for (let i = 0; i < word.length; i++) {
            scramble.push(word[i]);
        }
        let wordLength = word.length;
        let j = 0;
        let temp;

        while (wordLength--) {
            j = Math.floor(Math.random() * (wordLength + 1));
            temp = scramble[wordLength];
            newWord[wordLength] = scramble[j];
            scramble[j] = temp;
        }
        let scrambledWord = newWord.join("");
        return scrambledWord;
    };

    const testWordObj = () => {
        const testSWO = {};
        for (let i = 0; i < wordSearchList.length; i++) {
            testSWO[wordSearchList[i]] = wordSearchListScrambled[i];
        }
        setWordListTest(testSWO);
    }

    const handleUserInput = (e) => {
        e.preventDefault();
        const userInput = document.getElementById("ws-guess");

        if (wordListTest[userInput.value]) {
            document.getElementById(`${wordListTest[userInput.value]}`).className = "correct";
            document.getElementById(`${wordListTest[userInput.value]}`).innerHTML = `${userInput.value} ✅`;
            setSubmittedWords([...submittedWords, userInput.value]);
        }
        userInput.value = "";
    }
    
    return (
        <div className="ws-game">
            {props.wordScramble ? (
                <>
                    <div id="ws-form">
                        <form onSubmit={handleUserInput}>
                            <label htmlFor="ws-guess"></label>
                            <input type="text" id="ws-guess" placeholder="Write guess here..."/>
                        </form>
                            <button onClick={handleUserInput}>Submit</button>
                    </div>
                    <ul className="ws-wordbox">

                        {Object.values(wordListTest).map((word) => { 
                            return <li className="ws-vocab" key={word} name="scrambledWord" id={word}>{word}</li>
                        })}
                        
                    </ul>
                    <div className="ws-num-correct">
                        {submittedWords.length === 10 ? "Winner!" : `${submittedWords.length} / 10`}
                    </div>
                </>
            ) : null}
        </div>
    )
}