import React from 'react';
import SocialLinks from './SocialLinks';
import '../footer.css';
import Navigation from './Navigation';
import '../navigation.css';

class Footer extends React.Component {
	render() {
		return (
			<div className="footerSection">
                <span className="footerText">This webapp was created using React</span>
				<span className="linkBox">
					<SocialLinks />
                </span>
               
			</div>
		);
	}
}

export default Footer;
