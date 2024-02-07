import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Odyssey from "./components/Projects/Odyssey";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer";

function App() {
    AOS.init({
        once: true,
    });

    const [isScrolled, setIsScrolled] = useState(false);

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            // Determine scroll direction
            const isScrollingDown = currentScrollPos > prevScrollPos;

            // Update visibility based on scroll direction
            setVisible(isScrollingDown ? false : true);

            // Save the current scroll position for the next comparison
            setPrevScrollPos(currentScrollPos);
        };

        // Add scroll event listener when component mounts
        window.addEventListener("scroll", handleScroll);

        // Remove event listener when component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <>
            <header id="header" className={visible ? "visible" : ""}>
                <nav>
                    <a href="/" className="hover_underline_animation">
                        VINCE ERMITANO
                    </a>
                    <ul>
                        <li>
                            <a href="/" className="hover_underline_animation">
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover_underline_animation"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .querySelector("#about-me")
                                        .scrollIntoView({ block: "center" });
                                }}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover_underline_animation"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .querySelector(".projects")
                                        .scrollIntoView({ block: "center" });
                                }}
                            >
                                Projects
                            </a>
                        </li>
                    </ul>
                    <a
                        id="connect-with-me"
                        className="hover_underline_animation"
                        onClick={(e) => {
                            e.preventDefault();
                            document
                                .querySelector(".contact")
                                .scrollIntoView({ block: "center" });
                        }}
                    >
                        Connect with me
                    </a>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/projects/odyssey" element={<Odyssey />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
