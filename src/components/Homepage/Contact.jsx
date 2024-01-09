import React from "react";
import "./Contact.css";

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted");
    }

    const slideInForm = () => {
        const form = document.querySelector(".contact-content");
        const contact = document.querySelector(".contact");
        form.classList.add("open");
        contact.classList.add('open');

    }

    return (
        <>
            <section className="contact" onClick={slideInForm}>
                <h3>Wanna Talk?</h3>
                <h2>LET'S GET IN TOUCH</h2>
            </section>
            <div className="contact-content">
                <p>
                    Anything you would like to discuss with me about, I am here. <br></br>
                    I will reach out to you as soon as possible!
                </p>
                <form className="contact-form">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <input type="submit" value="Send ↗" />
                </form>
            </div>
        </>
    );
};

export default Contact;
