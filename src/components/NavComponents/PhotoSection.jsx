import React from 'react';
import PhotoGallery from '../PhotoGallery';
import NaviBar from '../LandingComps/NaviBar';
import '../CSS/photosection.css';

class PhotoSection extends React.Component {
	render() {
		return (
			<div>
				<div>
					<NaviBar />
				</div>
				<div className="photoGallery">
					<PhotoGallery />
				</div>
			</div>
		);
	}
}

export default PhotoSection;
