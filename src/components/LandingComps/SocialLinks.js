import React from 'react';
import '../CSS/sociallinks.css';

class SocialLinks extends React.Component {
	render() {
		return (
			<div className="linkBox">
				
					<a className="instagramLink" href="https://www.instagram.com/algorithm_ganache/?hl=en">
						<ion-icon name="logo-instagram" />
					</a>
				
			
					<a className="linkedinLink" href="https://www.linkedin.com/in/patrick-wellman-1533551a2/">
						<ion-icon name="logo-linkedin" />
					</a>
				
			</div>
		);
	}
}

export default SocialLinks;
