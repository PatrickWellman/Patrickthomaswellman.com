import React from 'react';
import '../aboutme.css';
import { Container, Header } from 'semantic-ui-react';

class AboutMe extends React.Component {
	render() {
		return (
			<div className="aboutMeSection">
				<Container>
					Patrick was born in New Orleans Louisiana. Shortly after, his family moved to New Haven Connecticut.
					This set the tone for the rest of his life- to this day, he has never lived anywhere for more than
					four years. Some of the more notable places he's lived include Zurich, Geneva, Moscow, and Miami
					Beach. <br /> Patrick began working as a Pastry Chef in 2013.
				</Container>
			</div>
		);
	}
}

export default AboutMe;
