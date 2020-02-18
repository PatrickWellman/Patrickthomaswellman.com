import React from 'react';
import {Button} from 'semantic-ui-react';
class Navbar extends React.Component {
	state = { name: 'Jack', location: 'Test', p1: 'Test1' };
	render() {
		console.log(this.state.name, this.props.name);
		return (
			<div className="navbar">
				<Button onClick={() => this.setState({ name: 'Patrick', location: 'Test2', p1: 'Test 2' })}>
					click
				</Button>
				<Button>
					<a className="navbar-btn" href="/">
						Patrick Wellman
					</a>
				</Button>
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
