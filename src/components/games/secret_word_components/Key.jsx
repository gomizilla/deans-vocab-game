import React, {useContext} from "react";
import { AppContext } from "../SecretWord";

export default function Key({ keyVal, enterOrDelete, disabled }) {
    const { onEnter, onDelete, onSelectLetter} = useContext(AppContext);

    const selectedLetter = () => {
        if (keyVal === "ENTER") {
            onEnter();
        } else if(keyVal === "DELETE") {
            onDelete();
        } else {
            onSelectLetter(keyVal);
        }
    }

    return (
        <div className="key" id={enterOrDelete ? "big" : disabled ? "disabled" : undefined} onClick={selectedLetter}>
            { keyVal }
        </div>
    )
}