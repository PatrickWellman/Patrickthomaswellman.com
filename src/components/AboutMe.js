import React from 'react';
import './CSS/aboutme.css';

class AboutMe extends React.Component {
	render() {
		return (
			<div className="aboutMeSection">
				<div className="title">ABOUT PATRICK</div>
				<div className="coolLine" />

				<p>
					I was born in New Orleans Louisiana. Shortly after, my family moved to New Haven, Connecticut. This
					set the tone for the rest of my life- to this day, I have never lived anywhere for more than four
					years. Some of the more notable places I have lived include Zurich, Geneva, Moscow, and Miami Beach.
				</p>
				<p>
					Working as a pastry chef since 2012, I have been able to work everywhere from 5 star resorts to 20
					course tasting menu restaurants. I met some really great people, was able to learn the craft from an
					amazing mentor, and a lot about myself along the way. Recently I decided to step out of the kitchen.
					In mid 2019, I decided to make a carrer change into web development. I still very much enjoy
					cooking, but prefer to do it at home now as a hobby.
				</p>
				<p>
					I've recently relocated to the Los Angeles area from Nashville to be closer to the heart of the tech
					industry, (not just for the amazing weather). I'm thrilled to be in such an exciting place.
				</p>
			</div>
		);
	}
}

export default AboutMe;
