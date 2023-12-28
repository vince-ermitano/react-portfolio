import React from "react";
import "./Homepage.css";
import DoubleArrow from '../../assets/double-arrow-right-icon.svg';
import Projects from "./Projects";
import Contact from "./Contact";

const Homepage = () => {
    return (
        <>
            <header id="header">
                <nav>
                    <a href="#">VINCE ERMITANO</a>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                    </ul>
                    <a id="connect-with-me">Connect with me</a>
                </nav>
            </header>
            <section id="hero">
                <h1>
                    {"<CONCEPTS />"} INTO ↴{" "}
                    <span id="polished-text">POLISHED ■</span>{" "}
                    <span id="digital-text">➥ <span>DIGITAL EXPERIENCES</span></span>
                </h1>
                <div id="enigma-definition">
                    {"<>"}
                    <p>
                        <b>Enigma</b> <span>(eh-nig-muh)</span> ¯\*( ͡❛ ͜ʖ ͡❛)*/¯
                    </p>
                    <p>
                        <i>Definition:</i> Crafting elusive digital landscapes, where
                        abstract ideas manifest as intricate puzzles, inviting
                        users to traverse the complex network of code and
                        uncover the veiled beauty concealed within.
                    </p>
                    {"<>"}
                </div>
                <a id="explore-btn"href="#">Explore My Work ▼</a>
                <span id="hero-emoticon">( ≖.≖)</span>
                <img src={DoubleArrow} alt="double-arrow" />
            </section>
            <Projects />
            <Contact />
        </>
    );
};

export default Homepage;
