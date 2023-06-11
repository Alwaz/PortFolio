import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';
const Footer = () => {
    const [formData, setFormData] = useState({ username: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isloading, setIsLoading] = useState(false);

    const { username, email, message } = formData


    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };

    const handleSubmit = () => {
        setIsLoading(true);
        const contact = {
            _type: 'contact',
            name: formData.username,
            email: formData.email,
            message: formData.message,
        };

        client.create(contact)
            .then(() => {
                setIsLoading(false);
                setIsFormSubmitted(true);
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <h2 className="head-text">Contact me & Lets bring <span>Ideas</span> to <span>Life</span></h2>
            <div className="app__footer-cards">
                <div className="app__footer-card ">
                    <img src={images.email} alt="email" />
                    <a href="mailto:alwazkazi3@gmail.com" className="p-text">alwazkazi3@gmail.com</a>
                </div>
            </div>
            {!isFormSubmitted ? (<div className="app__footer-form app__flex">
                <div className="app__flex">
                    <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
                </div>
                <div className="app__flex">
                    <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
                </div>
                <div>
                    <textarea
                        className="p-text"
                        placeholder="Your Message"
                        value={message}
                        name="message"
                        onChange={handleChangeInput}
                    />
                </div>
                <button type="button" className="p-text" onClick={handleSubmit}>{!isloading ? 'Send Message' : 'Sending...'}</button>

            </div>) : (
                <div>
                    <h3 className="head-text">
                        Thank you for getting in touch!
                    </h3>
                </div>
            )

            }

        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg',
);