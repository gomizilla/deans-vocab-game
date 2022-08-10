import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Game from "./components/Game";

export default function App() {
    // STATE - State generally refers to data or properties that need to be tracking in an application.

    // const [allLocations, setAllLocations] = useState([]); - example
    
    // EFFECT
    /* The useEffect Hook allows you to perform side effects in your components.
        Some examples of side effects are: fetching data, directly updating the DOM, and timers.
        useEffect accepts two arguments. The second argument is optional.
        useEffect(<function>, <dependency>) 
        Write methods in Handler section and call them in useEffect section
        */
        
    /* 
        useEffect(() => {
            getTotalLocations();
        }, []);
    */

    // HANDLER
    /* const getTotalLocations = async () => {
        const lists = await getAllLocations(); <- getalllocations written in another file (utils)
        setDropDownList(lists.data);
    };
    */


    // RENDER
    return (
        <div className="App">
            <Header />
            <Game />
        </div>
    );
}