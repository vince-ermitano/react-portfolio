import React from "react";
import "./Projects.css";

const Projects = () => {
    return (
        <section className="projects">
            <h2>✦ MY LATEST VENTURES</h2>

            <div className="project">
                <div className="details">
                    <h3>The Odyssey</h3>
                    <h4>
                        Online Masterclass Portal and <br></br>E-commerce Site
                    </h4>
                    <a href="/" className="details-link">
                        details
                    </a>
                    <a href="/" className="visit-link">
                        (visit site) <span>↗</span>
                    </a>
                </div>
                <div className="project-image">
                    <img src="https://via.placeholder.com/500" alt="project" />
                </div>
            </div>

            <div className="github-link-wrapper">
                <a href="/" className="github-link">
                    VIEW MY GITHUB ↗
                </a>
            </div>
        </section>
    );
};

export default Projects;
