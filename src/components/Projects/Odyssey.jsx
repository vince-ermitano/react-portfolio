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
                            those who pay for it, the website had to be{" "}
                            <b>secure</b> and provide <b>limited access</b> to
                            those who had the credentials to do so.
                        </li>
                        <li>
                            It had to be <b>accessible</b> for users across all
                            types of devices and browsers.
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
                        <div className="task task1">
                            <div className="title">
                                <h4>Visual Design</h4>
                            </div>
                        </div>
                        <div className="task details">
                            <div className="description">
                                <p>
                                    Planning the look of the website is crucial
                                    for me, so that when I get to the HTML and
                                    CSS, I have a clear goal of what I need to
                                    build. Thus, my first task was building
                                    wireframes for the site.{" "}
                                </p>
                                <br />
                                <p>
                                    All the wireframes were built using Figma,
                                    where I would craft designs and layouts for
                                    each page of the website. They were then
                                    shared and discussed with Gaku to make sure
                                    we were on the same page and that they fit
                                    the style he intended for. We went for a
                                    dynamic and interactive look to keep users
                                    engaged.
                                </p>
                                <br />
                                <p>
                                    I don't really see myself as creative when
                                    it comes to visual design, especially when
                                    it comes to layout and animations, so I did
                                    take a lot of inspiration from the likes of
                                    Dribbble, Codepen, and more. Of course, the
                                    wireframes didn't always come out perfect
                                    the first time through, so there was
                                    constant analysis and iteration to
                                    throughout the project's development.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="task-item"
                        onMouseEnter={(e) => taskItemOnMouseEnter(e)}
                        onMouseLeave={(e) => taskItemOnMouseLeave(e)}
                    >
                        <div className="task task1">
                            <div className="title">
                                <h4>Database</h4>
                            </div>
                        </div>
                        <div className="task details">
                            <div>
                                <p>
                                    A database was essential for this project. I
                                    stored data such as user credentials, user
                                    purchased items, the masterclass course
                                    modules, newsletter list, and more in our
                                    database. Having all this data stored here
                                    allowed for one, true source, making it easy
                                    for fetched data across different devices
                                    and accounts to be consistent and not
                                    out-of-date.
                                </p>
                                <br />
                                <p>
                                    I used Firebase Firestore as my choice of
                                    database technology. It was my first time
                                    using a storage system that doesn't use SQL
                                    as it's language, but it provided a quick
                                    and easy way to host my database and perform
                                    CRUD operations to carry out the
                                    functionalities of the website.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="task-item"
                        onMouseEnter={(e) => taskItemOnMouseEnter(e)}
                        onMouseLeave={(e) => taskItemOnMouseLeave(e)}
                    >
                        <div className="task task1">
                            <div className="title">
                                <h4>Server</h4>
                            </div>
                        </div>
                        <div className="task details">
                            <div>
                                <p>
                                    The server consisted of several main routes
                                    to handle requests made via the client.
                                </p>
                                <br />
                                <ol>
                                    <li>
                                        Payments for items from the site
                                        (masterclass, lightroom presets, and
                                        other digital products). All data
                                        related to a purchase (cart items, price
                                        of each item, total price, discount
                                        codes, etc.) were packaged up to be
                                        passed into the Stripe or PayPal API
                                        where the actual financial transaction
                                        took place. I decided that using these
                                        APIs was the most practical way to go
                                        about handling payments as any thing
                                        that has to deal with a user submitting
                                        their financial info needs to be very
                                        secure and can be very complex to build
                                        from scratch.
                                    </li>
                                    <li>Fetching the course modules</li>
                                    <li>
                                        Fetching other digital products
                                        (lightroom presets, LUTs, transitions)
                                    </li>
                                    <li>
                                        Creating users and updating user info. I
                                        used Firebase Auth and Firestore to
                                        handle the storing of user credentials
                                        and related info after any handling of
                                        user info submissions.
                                    </li>
                                    <li>Signing up users to the newsletter</li>
                                    <li>
                                        Sending emails to the Odyssey's contact
                                        email. In our 'Contact Us' section, we
                                        have a form for users to message us
                                        about any inquiries.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div
                        className="task-item"
                        onMouseEnter={(e) => taskItemOnMouseEnter(e)}
                        onMouseLeave={(e) => taskItemOnMouseLeave(e)}
                    >
                        <div className="task task1">
                            <div className="title">
                                <h4>Authentication/Authorization</h4>
                            </div>
                        </div>
                        <div className="task details">
                            <div>
                                <p>
                                    There were multiple
                                    authentication/authorization flows or
                                    enforcements that were implemented.
                                </p>
                                <br />
                                <ol>
                                    <li>
                                        Storing basic user credentials (username
                                        and password) and checking against them
                                        were handled by Firebase Auth.
                                    </li>
                                    <li>
                                        Only users who had purchased the
                                        masterclass were allowed to view the
                                        associated modules.
                                    </li>
                                    <li>
                                        Any user that had made an account but
                                        had not yet purchased the masterclass
                                        had one of the modules unlocked to
                                        preview to aid them in the decision of
                                        the purchasing the course.
                                    </li>
                                    <li>
                                        Only users implemented accounts could access their purchases enforcement(downloads and course modules) from a user dashboard.
                                    </li>
                                    <li>We implemented a 'one location, one login' enforcement where users could only be logged in on one device at a time to limit account sharing.</li>
                                    <li>Prior to the official launch, we had the website locked up for users without a password.</li>
                                    <li>Users that purchased digital products without being logged in were sent an email containing the associated download links. These links were only accessible for 24 hours.</li>
                                </ol>
                            </div>
                        </div>
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
