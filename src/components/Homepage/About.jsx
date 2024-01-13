import React, { useState } from "react";
import "./About.css";

const About = () => {
    const [activeLink, setActiveLink] = useState("lifestyle");

    const handleLinkClick = (e) => {
        const links = document.querySelectorAll("#about-me nav ul li");
        const image = document.querySelector("#about-me .related-image img");
        const relatedText = document.querySelector(
            "#about-me .related-text .details"
        );

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

    const sectionMap = {
        lifestyle: {
            image: "https://i.postimg.cc/TYvgVLTb/3.jpg",
        },
        education: {
            image: "https://i.postimg.cc/PrbZ2XqR/2.jpg",
            text: [
                "I graduated with a Bachelor of Science in Computer Science from the University of California, San Diego. My coursework included a variety of topics such as data structures, algorithms, software engineering, and computer architecture.",
                <ul>
                    <li>University of California, San Diego</li>
                    <li>B.S. Computer Science</li>
                    <li>GPA: 3.85</li>
                    <li>Cum Laude</li>
                    <li>Provost Honors</li>
                </ul>
            ]
        },
        "professional focus": {
            image: "https://i.postimg.cc/TYvgVLTb/3.jpg",
            text: [
                "Hey there! I'm Vince, a full-stack web developer based in the US. I find enjoyment in creating things that live on the internet, whether that be websites, applications, or anything in between. In my role as a full-stack developer, I engage deeply with both the front-end aesthetics and user-experience aspects, as well as the intricate functionality and performance optimization of the back-end. My focus involves consistently exploring innovative approaches to enhance the visual appeal of projects while simultaneously striving for efficiency, optimal performance, and security in all facets of development. I find being able to work on both sides of the coin to be very rewarding, and such position provides me with a comprehensive understanding of the nature of the web.",
                "Take a look at my projects below to get a better sense of my work!",
            ],
        },
        "tech-stack": {
            image: "https://i.postimg.cc/PrbZ2XqR/2.jpg",
        },
    };

    return (
        <section id="about-me" data-aos="fade-up">
            <h2>MEET ME ⌘</h2>
            <div className="grid">
                <div className="related-text">
                    <nav>
                        <ul>
                            <li onClick={handleLinkClick} className="active">
                                professional focus
                            </li>
                            <li onClick={handleLinkClick}>tech-stack</li>
                            <li onClick={handleLinkClick}>education</li>
                            <li onClick={handleLinkClick}>lifestyle</li>
                        </ul>
                    </nav>
                    <div className="details fade-in">
                        <p>
                            Hey there! I'm Vince, a full-stack web developer
                            based in the US. I find enjoyment in creating things
                            that live on the internet, whether that be websites,
                            applications, or anything in between. In my role as
                            a full-stack developer, I engage deeply with both
                            the front-end aesthetics and user-experience
                            aspects, as well as the intricate functionality and
                            performance optimization of the back-end. My focus
                            involves consistently exploring innovative
                            approaches to enhance the visual appeal of projects
                            while simultaneously striving for efficiency,
                            optimal performance, and security in all facets of
                            development. I find being able to work on both sides
                            of the coin to be very rewarding, and such position
                            provides me with a comprehensive understanding of
                            the nature of the web.
                        </p>
                        <p>
                            Take a look at my projects below to get a better
                            sense of my work!
                        </p>
                        <a className="link" href="/">
                            follow me on instagram
                        </a>
                    </div>
                </div>
                <div className="related-image">
                    <img
                        src={images["lifestyle"]}
                        className="fade-in"
                        alt="about-me"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
