import React from 'react';
import Landing from './Landing';
import Navigation from './Navigation';
import AboutMe from './AboutMe';
import PhotoGallery from './PhotoGallery'


import '../App.css';

const App = () => {
	return (
		<div>
			<Navigation />
			<Landing />
			<PhotoGallery />
			<AboutMe />
			
			
		</div>
	);
};

export default App;
