import React from "react";
import './About.css';

const About = () => {
    return (
        <section id="about-me">
            <h2>MEET ME ⌘</h2>
            <div className="grid">
                <div className="related-text">
                    <nav>
                        <ul>
                            <li>lifestyle</li>
                            <li>education</li>
                            <li className="active">professional focus</li>
                            <li>tech-stack</li>
                        </ul>
                    </nav>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                    <a className='link' href="/">follow me on instagram</a>
                </div>
                <div className="related-image">
                    <img
                        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f6f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                        alt="about-me"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
