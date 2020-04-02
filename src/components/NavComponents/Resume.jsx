import React from 'react';
import resume from './Patrick Resume.pdf';

// import resume from '../Rohan Damani Resume 2018.pdf';

const Resume = () => (
 <div className="iframe-container">
    <iframe src={resume} width="100%" height="2200px" className="iframe" />
</div>
);

export default Resume;
