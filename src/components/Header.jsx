import React from "react";
import "./Header.css";

const APP_NAME = "Dean's Vocabulary Game";

export default function Header() {
    return (
        <header className="header-container">
            <div className="wrapper-container">
                <h1 className="Header">{APP_NAME}</h1>
            </div>
        </header>
    );
}