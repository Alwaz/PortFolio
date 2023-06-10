import React from 'react';
import { motion } from 'framer-motion';

import '../About/About.scss'
import '../Work/Work.scss'
import './Blogs.scss'
import { blogs } from '../../constants/data';
import { AppWrap, MotionWrap } from '../../wrapper';
import { BsMedium } from 'react-icons/bs';


const Blogs = () => {
    return (
        <>
            <h2 className="head-text">Tech Blogs</h2>
            <div className="app__profiles">
                {blogs.map((blog, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__blog-item"
                        key={blog.title + index}
                    >
                        <div
                            className="app__blog-img app__flex"
                        >
                            <img src={blog.imgUrl} alt={blog.title} />
                            <a href={blog.link} target="_blank" rel="noreferrer">

                                <motion.div
                                    whileHover={{ opacity: [0, 1] }}
                                    transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                    className="app__blog-hover app__flex"
                                >
                                    <BsMedium />
                                </motion.div>
                            </a>
                        </div>
                        <h2 className="bold-text" style={{ marginTop: 20 }}>{blog.title}</h2>
                        <p className="p-text" style={{ marginTop: 10 }}>{blog.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Blogs, 'app__about'),
    'blogs',
    'app__primarybg',
);
