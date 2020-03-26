import React from 'react';
import Landing from './Landing';
import Navigation from './Navigation';
import AboutMe from './AboutMe';
import '../App.css';

const App = () => {
	return (
		<div>
			<Navigation />
			<Landing />
			<AboutMe />
		</div>
	);
};

export default App;
