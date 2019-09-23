import './index.css';

import React from 'react';
import resumePage1 from '../img/resume_page_1.png';
import resumePage2 from '../img/resume_page_2.png';

const About = () => {

    return (
        <div id="about-container">
            <img src={resumePage1} />
            <img src={resumePage2} />
        </div>
    );
};

export default About;
