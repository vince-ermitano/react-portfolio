import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="links">
                <div>
                    <p>follow me</p>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/vince-ermitano/">linkedin</a></li>
                        <li><a href="https://github.com/vince-ermitano">github</a></li>
                        <li><a href="https://www.instagram.com/prince_vince3" target="_blank">instagram</a></li>
                    </ul>
                </div>
                <div className="contact-me">
                    <p onClick={() => {
                        document.querySelector(".contact").scrollIntoView({ behavior: "smooth", block: "center"});
                    }}>contact me</p>
                </div>
                <div>
                    <p>credits</p>
                    <ul>
                        <li>GIFs from <a href="https://giphy.com/stickers/mario-luffy-jus-axbcxcNThrlte">GIPHY</a></li>
                    </ul>
                </div>
            </div>
            <p>© 2023 Vince Ermitano.</p>
        </footer>
    );
};

export default Footer;
