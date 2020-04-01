import React from 'react';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../CSS/navibar.css';

class NaviBar extends React.Component {
	render() {
		return (
			<Container className="navBar">
				<nav className="navigation__nav">
					<ul className="navigation__list">
						<li className="navigation__item">
							<Link to="/photogallery" className="navigation__link" onClick={this.toggleMenu}>
								photo gallery
							</Link>
						</li>
						<li className="navigation__item">
							<Link to="/crusttocrumbs" className="navigation__link" onClick={this.toggleMenu}>
								crust to crumbs
							</Link>
						</li>
						<li className="navigation__item">
							<Link to="/chefstuff" className="navigation__link" onClick={this.toggleMenu}>
								chefstuff
							</Link>
						</li>
						<li className="navigation__item">
							<Link to="/resume" className="navigation__link" onClick={this.toggleMenu}>
								resume
							</Link>
						</li>
					</ul>
				</nav>
			</Container>
		);
	}
}

export default NaviBar;
