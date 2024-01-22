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
            image.src = sectionMap[clickedLink].image;
        }, 750);
    };

    const images = {
        lifestyle: "https://i.postimg.cc/TYvgVLTb/3.jpg",
        education: "https://i.postimg.cc/PrbZ2XqR/2.jpg",
        "professional focus": "https://i.postimg.cc/TYvgVLTb/3.jpg",
        "tech-stack": "https://i.postimg.cc/PrbZ2XqR/2.jpg",
    };

    const sectionMap = {
        /*
        lifestyle content:
        - music
        - photography
        - golf
        - video games
        */
        lifestyle: {
            image: "https://i.postimg.cc/TYvgVLTb/3.jpg",
            text: [
                <>
                    There are a variety of things I enjoy doing in my free time
                    outside of programming. I love listening to{" "}
                    <a href="/">music</a>(I said 'outside of programming', but
                    this is an exception). I primarily listen to hip-hop/rap,
                    r&b, pop, and electronic (lo-fi when I'm in the coding
                    zone). My current artists currently are Travis Scott, New
                    Jeans, and Future. Take a look at my Spotify profile to get
                    an in-depth sense of the music I like.
                    <br />I also engage a little bit in{" "}
                    <a href="/">photography</a> due to getting inspired from
                    friends who actively pursue a career in the field, the
                    prominence of social media, as well as the aesthetic of the
                    location I lived at the time of discovery. I'm usually
                    inconsistent with my activeness on the hobby, but when I am
                    taking photos, it's therapeutic and mentally stimulating at
                    the same time which sort of causes me to go on these periods
                    where my life only consists thinking about and taking
                    photos. I, typically, find myself taking street photos and
                    portraits. Photography is a great way for me to capture
                    memories, relive those moments, and share it with everyone.
                    You can check out some of my photos if you're interested on
                    my <a href="/">Instagram</a>.
                    <br />
                    Growing up as a kid with a decently sized sports experience,
                    I'm always doing something active. Currently, I've been
                    keeping in shape by going to the gym (lifting weights)
                    religiously. I'm not a gym-rat by any means, but it's
                    personally fulfilling to see myself progress in terms of
                    strength and physique. Also, as of recently, I found myself
                    playing golf, a completely new sport to me. I started around
                    October of 2023, and I definitely have a tremendous amount
                    of room to improve, but the goal is to break 90 by the end
                    of the year!
                </>,
            ],
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
                </ul>,
            ],
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
            text: [
                "These are technologies I mainly use for full-stack development",
                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Node.js</li>
                    <li>Express JS</li>
                    <li>CSS</li>
                    <li>SQL</li>
                    <li>Firebase</li>
                    <li>Git/Github</li>
                </ul>,
                "Other technologies I have experience with either through coursework or personal projects",
                <ul>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C++</li>
                    <li>Chai</li>
                </ul>,
            ],
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
                        src={sectionMap["lifestyle"].image}
                        className="fade-in"
                        alt="about-me"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
