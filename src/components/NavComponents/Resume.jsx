import React from 'react';
import resume from './IMG_4611.jpg';




// import resume from '../Rohan Damani Resume 2018.pdf';

const Resume = () => (
	<div className="iframe-container"> 
		<img src={resume} width="1000px" height="2200px" className="iframe" />
	</div>
);

export default Resume;
