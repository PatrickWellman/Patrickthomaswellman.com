import React from 'react';
import { Menu } from 'semantic-ui-react';

class Navbar extends React.Component {
	render() {
		return (
			<div className="navbar">
				
					<span className="navbar-btn" href="/">
						Patrick Wellman
					</span>
				
				
					<span className="navbar-btn" href="/">
						Food Porn
					</span>
				
				
					<span className="navbar-btn" href="/">
						Travel
					</span>
				
				
					<span className="navbar-btn" href="/">
						Dogs
					</span>
				
				
					<span className="navbar-btn" href="/l">
						Resume
					</span>
				
			</div>
		);
	}
}

export default Navbar;
