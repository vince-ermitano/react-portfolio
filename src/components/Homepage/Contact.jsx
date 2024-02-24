import React, { useState } from "react";
import "./Contact.css";
import { toast } from "sonner";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiUrl = import.meta.env.VITE_PRODUCTION === 'true' ? "https://vinceermitano-0294c39353c2.herokuapp.com/contact" : `${import.meta.env.VITE_LOCAL_URL}/contact`;

        try {
            const res = await fetch(
                apiUrl,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, message }),
                }
            );

            const data = await res.json();
            console.log(data);

            toast.success("Message sent successfully!");
            setName("");
            setEmail("");
            setMessage("");
            
            if (data.error) {
                throw new Error(data.error);
            }
        } catch (e) {
            console.log(e);
            toast.error("Something went wrong. Please try again later.");
        }
    };

    const slideInForm = () => {
        const form = document.querySelector(".contact-content");
        const contact = document.querySelector(".contact");
        form.classList.add("open");
        contact.classList.add("open");
    };

    return (
        <>
            <section className="contact" onClick={slideInForm}>
                <h3>Wanna Talk?</h3>
                <h2>LET'S GET IN TOUCH</h2>
            </section>
            <div className="contact-content">
                <p>
                    Anything you would like to discuss with me about, send it over!{" "}
                    <br></br>I will reach out to you as soon as possible!
                </p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Message"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <input type="submit" value="Send ↗" />
                </form>
            </div>
        </>
    );
};

export default Contact;
