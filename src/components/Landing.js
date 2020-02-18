import React from 'react';
import Navbar from './Navbar';

class Landing extends React.Component {
	render() {
		return (
				<div className="header">
					<Navbar name={'fuck'} />
					<div className="hero-text-box">WE'RE ALL MAD HERE.</div>
				</div>
			
		);
	}
}

export default Landing;
