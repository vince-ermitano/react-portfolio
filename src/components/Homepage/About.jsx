import React, { useState } from "react";
import "./About.css";

const About = () => {
    const [activeLink, setActiveLink] = useState("lifestyle");

    const handleLinkClick = (e) => {
        const links = document.querySelectorAll("#about-me nav ul li");
        const image = document.querySelector("#about-me .related-image img");
        const relatedText = document.querySelector("#about-me .related-text .details");

        links.forEach((link) => {
            link.classList.remove("active");
        });

        e.target.classList.add("active");
        const clickedLink = e.target.innerText.toLowerCase();
        setActiveLink(clickedLink);

        // fade image and text
        image.classList.remove("fade-in");
        relatedText.classList.remove("fade-in");
        setTimeout(() => {
            image.classList.add("fade-in");
            relatedText.classList.add("fade-in");
            image.src = images[clickedLink];
        }, 750);
    };

    const images = {
        lifestyle: "https://i.postimg.cc/TYvgVLTb/3.jpg",
        education: "https://i.postimg.cc/PrbZ2XqR/2.jpg",
        "professional focus": "https://i.postimg.cc/TYvgVLTb/3.jpg",
        "tech-stack": "https://i.postimg.cc/PrbZ2XqR/2.jpg",
    };

    return (
        <section id="about-me" data-aos="fade-up">
            <h2>MEET ME ⌘</h2>
            <div className="grid">
                <div className="related-text">
                    <nav>
                        <ul>
                            <li onClick={handleLinkClick} className="active">lifestyle</li>
                            <li onClick={handleLinkClick}>education</li>
                            <li onClick={handleLinkClick}>
                                professional focus
                            </li>
                            <li onClick={handleLinkClick}>tech-stack</li>
                        </ul>
                    </nav>
                    <div className="details fade-in">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                        <a className="link" href="/">
                            follow me on instagram
                        </a>
                    </div>
                </div>
                <div className="related-image">
                    <img src={images["lifestyle"]} className="fade-in" alt="about-me" />
                </div>
            </div>
        </section>
    );
};

export default About;
