import React from 'react';
import { BsGithub, BsLinkedin, BsMedium } from 'react-icons/bs'

const SocialMedia: React.FC = () => {
    return (
        <div className="app__social">
            <div>
                <BsGithub />
            </div>
            <div>
                <BsLinkedin />
            </div>
            <div>
                <BsMedium />
            </div>
        </div>
    );
}

export default SocialMedia;
