import React from 'react';
import resume from './Patrick Resume.pdf';

const Resume = () => (
	<div className="iframe-container">
		<iframe src={resume} width="100%" height="2200px" className="iframe" />
	</div>
);

export default Resume;
