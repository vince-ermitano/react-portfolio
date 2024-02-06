import React, { useEffect } from "react";
import "./Homepage.css";
import DoubleArrow from '../../assets/double-arrow-right-icon.svg';
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Homepage = () => {

    useEffect(() => {
        scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* <header id="header">
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
            </header> */}
            <section id="hero" data-aos="fade-up">
                <h1 data-aos="fade-up">
                    <span id="concepts-into-text">
                        <span>
                            {"<CONCEPTS"}
                            {"\u00a0"}
                            {"/>"}
                        </span>
                        <span id="into-text">
                            <span>↴</span>
                            <span></span>
                            <span>0</span>
                            <span>T</span>
                            <span>N</span>
                            <span>I</span>
                            {/* INTO ↴{" "} */}
                        </span>
                    </span>
                    <span id="polished-text">POLISHED ■</span> {/* ➥ */}
                    <span id="digital-text">
                        <iframe
                            src="https://giphy.com/embed/GraeGMXcHMKAw"
                            class="giphy-embed"
                            allowFullScreen
                        ></iframe>
                        <span>DIGITAL EXPERIENCES</span>
                    </span>
                </h1>
                <div id="enigma-definition" data-aos="fade-up">
                    {"<>"}
                    <p>
                        <b>Enigma</b> <span>(eh-nig-muh)</span> ¯\*( ͡❛ ͜ʖ ͡❛)*/¯
                    </p>
                    <p>
                        <i>Definition:</i> Crafting elusive digital landscapes,
                        where abstract ideas manifest as intricate puzzles,
                        inviting users to traverse the complex network of code
                        and uncover the veiled beauty concealed within.
                    </p>
                    {"<>"}
                </div>
                <a
                    id="explore-btn"
                    href="/"
                    data-aos="fade-up"
                    onClick={(e) => {
                        e.preventDefault();
                        document.querySelector("#about-me").scrollIntoView({
                            block: "center",
                            behavior: "smooth",
                        });
                    }}
                >
                    Explore My Work ▼
                </a>
                <span
                    id="hero-emoticon"
                    className="text_shadows"
                    data-aos="fade-up"
                >
                    ( ≖.≖)
                </span>
                <img
                    src={DoubleArrow}
                    data-aos="fade-up"
                    alt="double-arrow"
                    onClick={(e) => {
                        e.preventDefault();
                        document.querySelector("#about-me").scrollIntoView({
                            block: "center",
                            behavior: "smooth",
                        });
                    }}
                />
            </section>
            <About />
            <Projects />
            <Contact />
        </>
    );
};

export default Homepage;
