
import React from 'react'
import './Contact.css'
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from 'react';
const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_ztb79g5",
                "template_pe6xi1o",
                form.current,
                "gqoqS1Y6ncv-8EwBO"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                    form.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div className="contact-form" id="contact">
            <div className="w-left">
                <div className="awesome">
                    <span  >Get in Touch</span>
                    <div
                        className="blur s-blur1"
                    ></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button" />
                    <span>{done && "Thank you for visiting us!"}</span>
                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    )
}

export default Contact
