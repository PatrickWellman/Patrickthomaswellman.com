import React from 'react';
import QuoteBox from './QuoteBox';
import '../CSS/landing.css';
import SocialLinks from './SocialLinks';
import NaviBar from './NaviBar';

class Landing extends React.Component {
	render() {
		return (
			<div className="head">
				<NaviBar />
				<div className="hero-text-box">
					<span className="word1">Patrick</span>
					<span className="word2"> Wellman</span>
				</div>

				<div>
					<QuoteBox />
				</div>
				<div className="socialLinksLanding">
					<SocialLinks />
				</div>
			</div>
		);
	}
}

export default Landing;