import React from 'react';
import FoodGallery from '../FoodGallery';
import NaviBar from '../LandingComps/NaviBar';
import '../CSS/chefstuff.css';

class ChefStuff extends React.Component {
	render() {
		return (
			<div>
				<NaviBar />

				<div className="foodGallery">
					<FoodGallery />
				</div>
			</div>
		);
	}
}

export default ChefStuff;
