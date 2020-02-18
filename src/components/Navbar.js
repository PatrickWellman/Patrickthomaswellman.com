import React from 'react';

class Navbar extends React.Component {
	render() {
		return (
			<div className="navbar">
				<span>
					<a className="navbar-btn" href="/">
						Patrick Wellman
					</a>
				</span>
				<span>
					<a className="navbar-btn" href="/">
						Food Porn
					</a>
				</span>
				<span c>
					<a className="navbar-btn" href="/">
						Travel
					</a>
				</span>
				<span>
					<a className="navbar-btn" href="/">
						Dogs
					</a>
				</span>
				<span>
					<a className="navbar-btn" href="/l">
						Resume
					</a>
				</span>
			</div>
		);
	}
}

export default Navbar;
