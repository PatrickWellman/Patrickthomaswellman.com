import React from 'react';
import  FoodGallery  from '../FoodGallery';
import NaviBar from '../LandingComps/NaviBar';


class ChefStuff extends React.Component {
	render() {
		return (
			<div>
				<NaviBar />
				<FoodGallery />
			</div>
		);
	}
}

export default ChefStuff;
