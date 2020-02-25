import React from 'react';
import '../css/navigation.css';

class Navigation extends React.Component {
	render() {
		return (
			<div className="navigation">
				<input type="checkbox" className="navigation__checkbox" id="navi__toggle" />
				<label for="navi__toggle" className="navigation__button">
					MENU
				</label>
				<div className="navigation__background">&nbsp;</div>

				<nav className="navigation__nav">
					<ul className="navigation__list">
						<li className="navigation__item">
							<a href="#" className="navigation__link">
								crust to crumbs
							</a>
						</li>
						<li className="navigation__item">
							<a href="#" className="navigation__link">
								image gallery
							</a>
						</li>
						<li className="navigation__item">
							<a href="#" className="navigation__link">
								chef stuff
							</a>
						</li>
						<li className="navigation__item">
							<a href="#" className="navigation__link">
								resume
							</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Navigation;
