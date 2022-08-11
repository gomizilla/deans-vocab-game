import React, { useEffect, useContext, useCallback } from "react";
// import { useCallback } from "react";
import { AppContext } from "../SecretWord";
import Key from "./Key";

export default function Keyboard() {
    const keyboardTop = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keyboardMid = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keyboardBot = ["Z", "X", "C", "V", "B", "N", "M"];

    const { onEnter, onDelete, onSelectLetter } = useContext(AppContext);

    const handleKeyboard = useCallback((event) => {
        if (event.key === "Enter") {
            onEnter();
        } else if (event.key === "Backspace") {
            onDelete();
        } else {
            keyboardTop.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key);
                }
            });
            keyboardMid.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key);
                }
            });
            keyboardBot.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key);
                }
            });
        }
    });

    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard);
        return () => {
            document.removeEventListener("keydown", handleKeyboard);
        }
    }, [handleKeyboard]);


    return (
        <div className="keyboard" onKeyDown={handleKeyboard}>
            <div className="line1">
                {keyboardTop.map((key) => {
                    return <Key keyVal={key}/>
                })}
            </div>
            <div className="line2">
                {keyboardMid.map((key) => {
                    return <Key keyVal={key}/>
                })}
            </div>
            <div className="line3">
                <Key keyVal={"ENTER"} enterOrDelete/>
                {keyboardBot.map((key) => {
                    return <Key keyVal={key}/>
                })}
                <Key keyVal={"DELETE"} enterOrDelete/>
            </div>
        </div>
    )
}