import React from "react";
import "./Projects.css";

const Projects = () => {
    return (
        <section className="projects" data-aos="fade-up">
            <h2>✦ MY LATEST VENTURES</h2>

            <div className="project" data-aos="fade-up">
                <div className="details">
                    <h3>The Odyssey</h3>
                    <h4>
                        Online Masterclass Portal and <br></br>E-commerce Site
                    </h4>
                    <a href="/#/projects/odyssey" className="details-link">
                        details
                    </a>
                    <a href="https://education.gakuyen.com/" target="_blank" className="visit-link">
                        (visit site) <span>↗</span>
                    </a>
                </div>
                <div className="project-image">
                    <img src="/images/odyssey_hero_screenshot.png" alt="project" />
                </div>
            </div>

            <div className="github-link-wrapper" data-aos="fade-up">
                <a href="https://github.com/vince-ermitano" target="_blank" className="github-link">
                    VIEW MY GITHUB ↗
                </a>
            </div>
        </section>
    );
};

export default Projects;
