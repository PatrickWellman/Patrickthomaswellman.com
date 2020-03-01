import React from 'react';
import '../aboutme.css';
import { Container, Header } from 'semantic-ui-react';

class AboutMe extends React.Component {
	render() {
		return (
			<div className="aboutMeSection">
				<Header as="h2">PATRICK WELLMAN</Header>
				<Container>
					I was born in New Orleans Louisiana. Shortly after, my family moved to New Haven Connecticut. This
					set the tone for the rest of my life- to this day, I have never lived anywhere for more than four
					years. Some of the more notable places I have lived include Zurich, Geneva, Moscow, and Miami Beach.{' '}
					<br />
				</Container>
			</div>
		);
	}
}

export default AboutMe;
