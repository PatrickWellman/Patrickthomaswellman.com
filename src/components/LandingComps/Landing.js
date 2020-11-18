import React from 'react';
import QuoteBox from './QuoteBox';
import '../CSS/landing.css';
import SocialLinks from './SocialLinks';
import NaviBar from './NaviBar';

class Landing extends React.Component {
	render() {
		return (
			<ul className="Landing">
				<li>
					<NaviBar />
				</li>
				<li className="HeroText">
					<span className="FirstName">Patrick</span>
					<span className="LastName"> Wellman</span>
				</li>

				<li className="QuoteBox">
					<QuoteBox />
				</li>
				<li className="SocialLinks">
					<SocialLinks />
				</li>
			</ul>
		);
	}
}

export default Landing;
