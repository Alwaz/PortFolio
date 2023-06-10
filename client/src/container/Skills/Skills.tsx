import React from 'react';
import './Skills.scss';
import { AppWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import { skills } from '../../constants/data';

const Skills: React.FC = () => {
    return (
        <>
            <h2 className="head-text">Skills & Experiences</h2>
            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={skill.name}>

                            <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                                <img src={skill.icon} alt={skill.name} />
                            </div>
                            <p className="p-text">{skill.name}</p>



                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default AppWrap(Skills, 'skills');
