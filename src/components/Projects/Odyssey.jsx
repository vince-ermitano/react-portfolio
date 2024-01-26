import React from "react";
import "./Odyssey.css";
import { GoArrowUpRight } from "react-icons/go";

const Odyssey = () => {
    return (
        <section id="odyssey">
            <section className="hero">
                <img
                    className="main"
                    src="/images/coursebannerimg.png"
                    alt="Odyssey Course Banner"
                />
                <div className="logo-container">
                    <img
                        className="logo"
                        src="/images/theodysseywhite_no_padding.png"
                        alt="The Odyssey Logo"
                    />
                    <p>Creative Masterclass ✶ ࣪˖࿐ *</p>
                </div>
                <div className="links">
                    <div className="link hover_underline_animation">
                        <p>VISIT THE ODYSSEY</p>
                        <div className="circle">
                            <GoArrowUpRight />
                        </div>
                    </div>
                    <div className="link hover_underline_animation">
                        <p>GITHUB REPO</p>
                        <div className="circle">
                            <GoArrowUpRight />
                        </div>
                    </div>
                </div>
            </section>
            <section className="overview-goal">
                <h1>OVERVIEW</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </section>
            <img src="/images/odyssey_hero_screenshot.png" alt="Odyssey Hero Screenshot" />
            <section className="overview-goal">
                <h1>GOAL</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </section>
        </section>
    );
};

export default Odyssey;
