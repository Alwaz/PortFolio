import React from 'react';
import { BsGithub, BsLinkedin, BsMedium } from 'react-icons/bs'

const SocialMedia: React.FC = () => {
    return (
        <div className="app__social">
            <a href={'https://github.com/Alwaz'} target="_blank" rel="noreferrer">
                <BsGithub />
            </a>

            <a href='https://www.linkedin.com/in/alwaz-qazi/' target="_blank" rel="noreferrer">
                <BsLinkedin />
            </a>

            <a href='https://medium.com/@alwazkazi3' target="_blank" rel="noreferrer">
                <BsMedium />
            </a>
        </div>
    );
}

export default SocialMedia;
