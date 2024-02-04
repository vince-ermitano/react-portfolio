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
                        building the website for the course from the UI/UX
                        design to the front-end + back-end development and
                        deloyment.
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
                                    where I would craft responsive designs and
                                    layouts for each page of the website. They
                                    were then shared and discussed with Gaku to
                                    make sure we were on the same page and that
                                    they fit the style he intended for. We went
                                    for a dynamic and interactive look to keep
                                    users engaged.
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
                                <p>
                                    The actual implementation of the front-end
                                    was built with React, Redux, HTML, JS, and
                                    CSS.
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
                                    to handle requests made via the client. It
                                    was built with Node.js and Express.js.
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
                                        Only users implemented accounts could
                                        access their purchases
                                        enforcement(downloads and course
                                        modules) from a user dashboard.
                                    </li>
                                    <li>
                                        We implemented a 'one location, one
                                        login' enforcement where users could
                                        only be logged in on one device at a
                                        time to limit account sharing.
                                    </li>
                                    <li>
                                        Prior to the official launch, we had the
                                        website locked up for users without a
                                        password.
                                    </li>
                                    <li>
                                        Users that purchased digital products
                                        without being logged in were sent an
                                        email containing the associated download
                                        links. These links were only accessible
                                        for 24 hours.
                                    </li>
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
                        This project was my biggest and my proudest personal
                        full-stack development yet. It required extensive
                        research, detailed planning, frequent meetings with
                        Gaku, continuous revisions, and, of course, the
                        notorious days and nights purely debugging. At the end
                        of the 3-4 months of development and at the time of the
                        website's release on December 9, 2023, I reflected on
                        the tasks that I had completed, what I did well, what I
                        could have done better, and what I learned in general.
                    </p>
                    <br />
                    <p>
                        I'd say that there are three main things that I believe
                        I did well. One, was staying determined to complete this
                        project regardless of how difficult, complex, and
                        uncertain it got. There were a lot of functionalities
                        that I implemented in this project that I had zero
                        experience with prior to tackling this task, and I'm
                        glad I got through them (of course, with the help of
                        fellow developers), because I came out with more
                        knowledge by the end than I did when I started. Two, I'm
                        fulfilled and proud with the efficient communication and
                        collaboration that I had with Gaku. Because we were both
                        meeting up frequently and messaging each other, we were
                        able to stay on top of things when it came to the things
                        that we needed from each other. That collaborative
                        environment set me up for success for having a clear
                        goal, meeting deadlines, staying motivated, and overall
                        just having a good time. Lastly, I'd say that I did a
                        decent job at balancing and scheduling my tasks. I,
                        obviously, had a lot of things to do, but I was able to
                        manage my time well and not overwork myself.
                    </p>
                    <br />
                    <p>
                        On the other hand, there were definitely things that I
                        could have done better. Firstly, I wish that I had
                        refactored code to be more readable so I could be more
                        efficient in debugging and adding new features. Me not
                        realizing that the project was going to be that big (a
                        lot of components and files) until it got, well ... big
                        was not ideal. The amount of time that I could have
                        saved and the amount of focus that I could have
                        maintained would have made the developer experience so
                        much better. Secondly, I noticed that I need to read the
                        details more carefully when it comes to using things
                        like APIs and other technologies. I could not believe
                        the amount of times that I had to keep recorrecting my
                        corrections when I was sending incorrectly formatted
                        data to APIs, as well as incorrectly handling responses
                        that they sent back to me. Further, there were
                        misunderstandings about how payment installments worked
                        (country restrictions), how refunds were handled, and
                        how fees on transactions were taken via Stripe and
                        PayPal which caused a little confusion for Gaku.
                        Finally, I realized I did an initially poor job of
                        estimating the time it would take to complete the
                        project from start to finish. When Gaku and I were in
                        the talks for the project, I had estimated that it would
                        only take about 1 month (2 months max) to complete. Man
                        was I wrong. There were a few factors that I didn't take
                        consideration of such as testing, debugging, and
                        dependencies between mine and Gaku's tasks.
                    </p>
                    <br />
                    <p>
                        Despite the things that I could have done better, I
                        learned and improved a lot, nonetheless. I'd say I
                        became much more efficient at splitting up and creating
                        React components, appropriately creating and using Redux
                        slices, building out servers, and researching solutions
                        to problems I face in development. Further, building a
                        website that real people use and pay for, I learned
                        about the security risks that could potentially occur
                        and how to prevent them. I also learned about the
                        importance of testing especially when you are a solo
                        developer. Finally and again, I was able to implement
                        functionalities that I had no experience with prior to
                        this project, but now I can say that I have experience
                        with them and can confidently use them in future
                        projects.
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
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Redux</li>
                        <li>Firebase</li>
                        <li>Figma</li>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Illustrator</li>
                        <li>Stripe API</li>
                        <li>PayPal API</li>
                        <li>Animate-on-Scroll library</li>
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
                            A former classmate and a good friend of mine, Gaku,
                            a.k.a @gakuyen, a.k.a a modern renaissance man, is a
                            creative specializing in photography and
                            videography. With over half a million followers on
                            instagram and working with a load of big name brands
                            such as Apple, Nike, Gucci, and Adobe to name a few,
                            he has proven to be a successful creative in the
                            social media space. Check out his work to see his
                            unique style!
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
