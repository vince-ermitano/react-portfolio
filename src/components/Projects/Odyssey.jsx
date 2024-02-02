import React, { useEffect } from "react";
import "./Odyssey.css";
import { GoArrowUpRight } from "react-icons/go";
import { wrapGrid } from "animate-css-grid";

const Odyssey = () => {
    useEffect(() => {
        scrollTo(0, 0);

        const grid = document.querySelector(".tasks-container");
        const taskItems = document.querySelectorAll(".task-item");
        wrapGrid(grid);

        taskItems.forEach((taskItem) => {
            wrapGrid(taskItem);
        });
    }, []);

    const taskItemOnMouseEnter = (e) => {
        e.target.closest('.task-item').classList.add('active');
    }

    const taskItemOnMouseLeave = (e) => {
        e.target.closest('.task-item').classList.remove('active');
    }

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
                    <div
                        className="link white_hover_underline_animation"
                        onClick={() =>
                            window.open(
                                "https://education.gakuyen.com/",
                                "_blank"
                            )
                        }
                    >
                        <p>VISIT THE ODYSSEY</p>
                        <div className="circle">
                            <GoArrowUpRight />
                        </div>
                    </div>
                    <div
                        className="link white_hover_underline_animation"
                        onClick={() =>
                            window.open(
                                "https://github.com/vince-ermitano/gakuyen-education",
                                "_blank"
                            )
                        }
                    >
                        <p>GITHUB REPO</p>
                        <div className="circle">
                            <GoArrowUpRight />
                        </div>
                    </div>
                </div>
            </section>
            <section className="overview-goal">
                <h1>OVERVIEW</h1>
                <div>
                    <p>
                        The Odyssey is a masterclass by Gaku Lange, an
                        accomplished creative in the social media space, that
                        educates aspiring fellow artists to push their work to
                        become a successful business from finding their own
                        creative voice to working with brands. I was tasked with
                        building the website for the course from the wireframing
                        and designing to the development and deloyment.
                    </p>
                    <br />
                    <p>
                        You can visit the site{" "}
                        <a
                            href="https://education.gakuyen.com/"
                            target="_blank"
                            className="hover_underline_animation"
                        >
                            here
                        </a>
                    </p>
                </div>
            </section>
            <img
                src="/images/odyssey_hero_screenshot.png"
                alt="Odyssey Hero Screenshot"
            />
            <section className="overview-goal">
                <h2>GOAL</h2>
                <div className="description">
                    <p>
                        When Gaku and I were discussing the project prior to the
                        execution, we agreed on three main characteristics and
                        functionalities that the website needed to exhibit:
                    </p>
                    <ol>
                        <li>
                            To no surprise, the website had to be{" "}
                            <b>visually appealing</b> and <b>engaging</b> to
                            show users the quality of the work that Gaku had put
                            into his course. It was also crucial for the website
                            to maintain Gaku's persona/style that he displays
                            through his brand for users to see consistency
                            through his work.
                        </li>
                        <li>
                            Since the masterclass is an exclusive experience to
                            those who pay for it, the website had to be <b>secure</b> {" "}
                            and provide <b>limited access</b> to those who had the credentials
                            to do so.
                        </li>
                        <li>
                            It had to be <b>accessible</b> for users across all types
                            of devices and browsers.
                        </li>
                    </ol>
                    <p>
                        With these in mind, we had a clear goal of how we wanted
                        the website to look and function.
                    </p>
                </div>
            </section>
            <section className="tasks">
                <div className="two-title">
                    <h2>FULFILLED TASKS</h2>
                    <h3>WHAT I DID</h3>
                </div>
                <div className="tasks-container">
                    <div
                        className="task-item"
                        onMouseEnter={(e) => taskItemOnMouseEnter(e)}
                        onMouseLeave={(e) => taskItemOnMouseLeave(e)}
                    >
                        <div className="task task1"></div>
                        <div className="task details"></div>
                    </div>
                    <div
                        className="task-item"
                        onMouseEnter={(e) => taskItemOnMouseEnter(e)}
                        onMouseLeave={(e) => taskItemOnMouseLeave(e)}
                    >
                        <div className="task task1"></div>
                        <div className="task details"></div>
                    </div>
                    <div
                        className="task-item"
                        onMouseEnter={(e) => taskItemOnMouseEnter(e)}
                        onMouseLeave={(e) => taskItemOnMouseLeave(e)}
                    >
                        <div className="task task1"></div>
                        <div className="task details"></div>
                    </div>
                    <div
                        className="task-item"
                        onMouseEnter={(e) => taskItemOnMouseEnter(e)}
                        onMouseLeave={(e) => taskItemOnMouseLeave(e)}
                    >
                        <div className="task task1"></div>
                        <div className="task details"></div>
                    </div>
                </div>
            </section>
            <section className="takeaways">
                <div className="left-panel">
                    <div className="two-title">
                        <h2>TAKEAWAYS</h2>
                        <h3>WHAT I LEARNED</h3>
                    </div>
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
                    <br />
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
                    <br />
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
                </div>
                <div className="right-panel">
                    <img
                        src="/images/odyssey_takeaways_screenshot.png"
                        alt="Odyssey Takeaways Screenshot"
                    />
                </div>
            </section>
            <section className="tech-stack">
                <div className="left-panel">
                    <img
                        src="/images/odyssey_tech_stack_screenshot.png"
                        alt="Odyssey Tech Stack Screenshot"
                    />
                </div>
                <div className="right-panel">
                    <div className="two-title">
                        <h2>TECH-STACK</h2>
                        <h3>WHAT I USED</h3>
                    </div>
                    <ul>
                        <li>React</li>
                        <li>React</li>
                        <li>React</li>
                        <li>React</li>
                        <li>React</li>
                        <li>React</li>
                        <li>React</li>
                        <li>React</li>
                        <li>React</li>
                        <li>React</li>
                    </ul>
                </div>
            </section>
            <section className="collaborator">
                <h2>COLLABORATOR</h2>
                <div className="collaborator-container">
                    <p>@GAKUYEN</p>
                    <img
                        src="/images/gakuyen_prof_pic.png"
                        alt="Gakuyen Profile"
                    />
                    <div className="description">
                        <h3>GAKU LANGE</h3>
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
                        <a
                            className="black-button"
                            href="https://www.gakuyen.com/"
                            target="_blank"
                        >
                            Explore Gaku's Work
                        </a>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Odyssey;
