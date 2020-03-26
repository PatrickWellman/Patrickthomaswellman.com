import React from 'react';
import { Link } from 'react-router-dom';
import '../navigation.css';

class Navigation extends React.Component {
  state = { isMenuOpen: false };

  toggleMenu = () => {
      this.setState({isMenuOpen: !this.state.isMenuOpen})
  }

  render() {
  	const classNameToggle = this.state.isMenuOpen ? "navigation__checkbox checked" : "navigation__checkbox"

    return (
      <div className="navigation">
        <input
          type="checkbox"
          className={classNameToggle}
          id="navi__toggle"
          onClick={this.toggleMenu}
        />
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
      </div>
    );
  }
}

export default Navigation;
