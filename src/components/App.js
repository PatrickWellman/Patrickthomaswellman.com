import React from 'react';
import Landing from './Landing';
import ImageGrid from './ImageGrid';
import Navigation from './Navigation';
import AboutMe from './AboutMe';
import Footer from './Footer'

import MyGallery from './MyGallery';

import '../App.css';

const App = () => {
	return (
		<div>
			<Navigation />
			<Landing />
			<AboutMe />
			<Footer />
		</div>
	);
};

export default App;
