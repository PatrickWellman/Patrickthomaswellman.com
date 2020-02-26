import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Bo from '../DogPics';
import Chunk from '../images/IMG_7308.jpg';
import Beach from '../images/IMG_7889.jpg';

class ImageDisplay extends React.Component {
	render() {
		return (
			<div className="section">
				<Carousel autoPlay>
					<div>
						<img src={Bo} />
						<p className="legend">BOCEPHUS</p>
					</div>
					<div>
						<img src={Chunk} />
						<p className="legend">CHAUNCEY</p>
					</div>
					<div>
						<img src={Beach} />
						<p className="legend">OIL NUT BAY</p>
					</div>
				</Carousel>
			</div>
		);
	}
}

export default ImageDisplay;
