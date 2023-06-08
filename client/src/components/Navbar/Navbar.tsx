import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss';

const Navbar: React.FC = () => {
    const [toggle, setToggle] = useState(false)
    const navbarItems = ['home', 'about', 'work', 'skills', 'blogs', 'contact'];

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <p>A.Q</p>
            </div>
            <ul className='app__navbar-links'>
                {navbarItems.map((item) => (
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            {/* Responsive menu */}
            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul >
                            {navbarItems.map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                </li>
                            ))}
                        </ul>

                    </motion.div>
                )}
            </div>

        </nav>
    );
};

export default Navbar;
