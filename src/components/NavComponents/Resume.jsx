import React from 'react';
import resume from './Patrick Resume.pdf';
import NaviBar from '../LandingComps/NaviBar';
import '../CSS/resume.css';
const Resume = () => (
	<div>
		
		<NaviBar />
		<div className="resume">
			<div className="iframe-container">
				<iframe src={resume} width="100%" height="2200px" className="iframe" />
			</div>
		</div>
	</div>
);

export default Resume;
