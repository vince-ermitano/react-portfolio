import React from "react";
import "./Odyssey.css";
import { GoArrowUpRight } from "react-icons/go";

const Odyssey = () => {
    return (
        <section id="odyssey">
            <div className="hero">
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
            </div>
        </section>
    );
};

export default Odyssey;
