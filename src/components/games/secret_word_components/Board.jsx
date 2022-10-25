import React, {useState, useContext} from "react";
import Letter from "./Letter";


export default function Board() {

    return (
        <div className="board">
            <div className="row">
                <Letter letterPos={0} round={0} />
                <Letter letterPos={1} round={0} />
                <Letter letterPos={2} round={0} />
                <Letter letterPos={3} round={0} />
                <Letter letterPos={4} round={0} />
            </div>
            <div className="row">
                <Letter letterPos={0} round={1} />
                <Letter letterPos={1} round={1} />
                <Letter letterPos={2} round={1} />
                <Letter letterPos={3} round={1} />
                <Letter letterPos={4} round={1} />
            </div>
            <div className="row">
                <Letter letterPos={0} round={2} />
                <Letter letterPos={1} round={2} />
                <Letter letterPos={2} round={2} />
                <Letter letterPos={3} round={2} />
                <Letter letterPos={4} round={2} />
            </div>
            <div className="row">
                <Letter letterPos={0} round={3} />
                <Letter letterPos={1} round={3} />
                <Letter letterPos={2} round={3} />
                <Letter letterPos={3} round={3} />
                <Letter letterPos={4} round={3} />
            </div>
            <div className="row">
                <Letter letterPos={0} round={4} />
                <Letter letterPos={1} round={4} />
                <Letter letterPos={2} round={4} />
                <Letter letterPos={3} round={4} />
                <Letter letterPos={4} round={4} />
            </div>
            <div className="row">
                <Letter letterPos={0} round={5} />
                <Letter letterPos={1} round={5} />
                <Letter letterPos={2} round={5} />
                <Letter letterPos={3} round={5} />
                <Letter letterPos={4} round={5} />
            </div>
        </div>
    )
}