import React from 'react';
import './Skills.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import { experiences, skills } from '../../constants/data';
import { Tooltip as ReactTooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'
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

                <div className="app__skills-exp">
                    {experiences.map((experience) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={experience.year}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {experience.works.map((work) => (
                                    <>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for={work.name}
                                            key={work.name}
                                        >
                                            <a
                                                data-tooltip-id={work.name}
                                                data-tooltip-content={work.desc}
                                            >
                                                <h4 className="bold-text">{work.name}</h4>
                                                <p className="p-text">{work.company}</p>
                                            </a>
                                        </motion.div>

                                        <ReactTooltip
                                            id={work.name}
                                            className="skills-tooltip"
                                        />


                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skills',
    'app__whitebg',
);