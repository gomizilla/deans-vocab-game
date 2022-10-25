import React from "react";
import { useEffect, useState } from "react";
import "./WordScramble.css";
import { getAllEnglishVocab } from "../../util/dataFromServer";


export default function WordScramble(props) {

    const [wordSearchList, setWordSearchList] = useState([]);
    const [wordSearchListScrambled, setWordSearchListScrambled] = useState([]);
    const [submittedWords, setSubmittedWords] = useState([]);
    const [wordListTest, setWordListTest] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // console.log("props.wordScramble: ", props.wordScramble);
    // console.log("wordsearchlist: ", wordSearchList);
    
    // useEffect(() => {
    //     if (props.currentGame === "Word Scramble") {
    //         setIsLoaded(true);
    //     }
    // }, [isLoaded])
    useEffect(() => {
        // getAllEnglishVocab();
        // handleVocabList();
        if (props.currentGame === "Word Scramble") {
            setIsLoaded(true);
        }
        scrambleWord(wordSearchList);
        handleScrambleWordList();
        testWordObj();
    }, [isLoaded]); 

    useEffect(() => {
        handleVocabList();
    }, [])

    // useEffect(() => {
    //     if (props.wordScramble === true) handleScrambleWordList();
    //     // handleWordCheck();
    // },[props.wordScramble]);

    useEffect(() => { 
        if(wordSearchListScrambled.length > 0) //handleWordCheck();
        testWordObj();
        // handleUserInput();
    }, [wordSearchListScrambled]);

    // useEffect(() => {
    //     handleUserInput();
    // }, [submittedWords])

    // ✅✅
    // const handleVocabList = () => { // need async/await later?
    //     const list = getAllEnglishVocab();
    //     const newList = [];
    //     // for (let i = 0; i < 10; i++) { // choose first 10 in the list, should be random from entire list & what teacher decides
    //     //     let random = Math.floor(Math.random() * list.length);
    //     //     console.log("random after calling: ", random);
    //     //     console.log("list before splice: ", list);
    //     //     newList.push(list[random]);
    //     //     list.splice(random, 1);
    //     //     console.log("random after splicing: ", random);
    //     //     console.log("list after splice: ", list);
    //     // }
    //     for (let i = 0; i < 10; i++) { // choose first 10 in the list, should be random from entire list & what teacher decides
    //         newList.push(list[i]);
    //     }
    //     setWordSearchList(newList);
    // }
    // console.log("props.vocablist check: ", props.vocabList)

    const handleVocabList = () => { // need async/await later?
        
        // const list = getAllEnglishVocab();
        const newList = [];
        const tempList = [];
        for (let i = 0; i < props.vocabList.length; i++) {
            tempList.push(props.vocabList[i]);
        }
        // console.log("temp list check: ", tempList);
        // for (let i = 0; i < 10; i++) {
        //     newList.push(props.vocabList[i].english_vocab);
        // }
        // for (let i = 0; i < 10; i++) { // choose first 10 in the list, should be random from entire list & what teacher decides
        //     let random = Math.floor(Math.random() * list.length);
        //     console.log("random after calling: ", random);
        //     console.log("list before splice: ", list);
        //     newList.push(list[random]);
        //     list.splice(random, 1);
        //     console.log("random after splicing: ", random);
        //     console.log("list after splice: ", list);
        // }
        // for (let i = 0; i < 10; i++) { // choose first 10 in the list, should be random from entire list & what teacher decides
        //     newList.push(list[i]);
        // }

        for (let i = 0; i < 10; i++) {
            let random = Math.floor(Math.random() * tempList.length);
            newList.push(tempList[random].english_vocab);
            tempList.splice(random, 1);
        }
        
        // console.log("newlist check after random: ", newList);


        setWordSearchList(newList);
    }

    const handleScrambleWordList = () => {
        const scrambledList = [];
        for (const word of wordSearchList) {
            scrambledList.push(scrambleWord(word));
            // console.log("word in scrambledlist: ", word);
        }
        // console.log("scrambled list: ", scrambledList);
        setWordSearchListScrambled(scrambledList);
    }

    const scrambleWord = (word) => {
        let scramble = [];
        let newWord = [];
        for (let i = 0; i < word.length; i++) {
            // scramble[i] = word[i];
            scramble.push(word[i]);
        }
        // console.log("scramble: ", scramble);
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
        // console.log("scrambled word check: ", scrambledWord);
    };

    const testWordObj = () => {
        const testSWO = {};
        for (let i = 0; i < wordSearchList.length; i++) {
            testSWO[wordSearchList[i]] = wordSearchListScrambled[i];
        }
        // console.log("testSWO: ", testSWO);
        setWordListTest(testSWO);
    }

    // console.log("word list test: ", wordListTest);

    const handleUserInput = (e) => {
        e.preventDefault();
        const userInput = document.getElementById("ws-guess");
        // console.log("userInput: ", userInput.value);

        if (wordListTest[userInput.value]) {
            // console.log("🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉")
            // console.log("awerawerawerawerawer: ", wordListTest[userInput.value])
            document.getElementById(`${wordListTest[userInput.value]}`).className = "correct";
            document.getElementById(`${wordListTest[userInput.value]}`).innerHTML = `${userInput.value} ✅`;
            setSubmittedWords([...submittedWords, userInput.value]);
        }
        userInput.value = "";
    }

    // const handleWordCheck = () => {
    //     const listOfScrambledWords = document.getElementsByClassName("ws-vocab")

    //     for (const word of listOfScrambledWords) {
    //         console.log("🍕🍕🍕", word.id);
    //     }
    // }

    // const wordState = correct ? "correct" : null;
 
    // console.log("ws asdfaslist: ", wordSearchList);
    // console.log("ws scrambled list: ", wordSearchListScrambled);
    // console.log("wordlisttest check: ", wordListTest);
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
                        {/* {wordSearchListScrambled.map((word) => {
                            return <li className="ws-vocab" key={word} name="scrambledWord" id={word}>{word}</li>
                        })} */}
                        {Object.values(wordListTest).map((word) => { 
                            console.log("word in wordlisttest: ", word);
                            return <li className="ws-vocab" key={word} name="scrambledWord" id={word}>{word}</li>
                        })}
                        
                        {/* <li className="ws-vocab" name="scrambledWord">{wordSearchListScrambled[0]}</li> */}
                    </ul>
                    <div className="ws-num-correct">
                        {submittedWords.length === 10 ? "Winner!" : `${submittedWords.length} / 10`}
                        {/* {submittedWords.length} / 10 */}
                    </div>
                </>
            ) : null}
        </div>
    )
}