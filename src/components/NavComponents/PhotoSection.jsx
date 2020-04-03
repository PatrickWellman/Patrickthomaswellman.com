import React from 'react';
import PhotoGallery from '../PhotoGallery';
import NaviBar from '../LandingComps/NaviBar';

class PhotoSection extends React.Component {
	render() {
		return (
			<div>
				<div>
					<NaviBar />
				</div>
				<div>
					<PhotoGallery />
				</div>
			</div>
		);
	}
}

export default PhotoSection;
