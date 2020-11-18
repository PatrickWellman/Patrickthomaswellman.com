import React from 'react';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../CSS/navibar.css';

class NaviBar extends React.Component {
	render() {
		return (
			<Container className="naviBar">
				
					<ul className="NavigationList">
						<li className="NavigationItem">
							
							<a href="http://papa-dulce.com">Papa-Dulce Recipes</a>
						
						</li>	
						<li className="NavigationItem">
							<Link to="/crusttocrumbs" className="navigation__link" onClick={this.toggleMenu}>
								crust to crumbs
							</Link>
						</li>
						<li className="NavigationItem">
							<Link to="/chefstuff" className="navigation__link" onClick={this.toggleMenu}>
								chef stuff
							</Link>
						</li>
						<li className="NavigationItem">
							<Link to="/resume" className="navigation__link" onClick={this.toggleMenu}>
								resume
							</Link>
						</li>
						<li className="NavigationItem">
							<Link to="" className="navigation__link" onClick={this.toggleMenu}>
								home
							</Link>
						</li>
					</ul>
				
			</Container>
		);
	}
}

export default NaviBar;
