import React from 'react';
import '../navigation.css';

class Navigation extends React.Component {
	render() {
		return (
			<div className="navigation">
				<input type="checkbox" className="navigation__checkbox" id="navi__toggle" />
				<label for="navi__toggle" className="navigation__button">
					<span className="navigation__icon">MENU</span>
				</label>
				<div className="navigation__background" />
				<label for="navi__toggle" className="navigation__button__back">
					<span className="navigation__icon__back">X</span>
				</label>

				<nav className="navigation__nav">
					<ul className="navigation__list">
						<li className="navigation__item">
							<a href="#" className="navigation__link">
								<span className="navListNumber">01</span>
								crust to crumbs
							</a>
						</li>
						<li className="navigation__item">
							<a href="#" className="navigation__link">
								<span className="navListNumber">02</span>
								Image gallery
							</a>
						</li>
						<li className="navigation__item">
							<a href="#" className="navigation__link">
								<span className="navListNumber">03</span>
								chef stuff
							</a>
						</li>
						<li className="navigation__item">
							<a href="#" className="navigation__link">
								<span className="navListNumber">04</span>
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
