import React from 'react';
import QuoteBox from './QuoteBox';

class Landing extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="hero-text-box">
					<span className="word1">Patrick</span>
					<span className="word2"> Wellman</span>
				</div>
				<div>
					<QuoteBox />
				</div>
			</div>
		);
	}
}

export default Landing;
