import React from 'react';
import Landing from './Landing';
import AboutMe from './AboutMe';
import BlogPostList from './BlogPostList';

import Navigation from './Navigation';

import '../App.css';

const App = () => {
	return (
		<div>
			<Navigation />
			<Landing />
		</div>
	);
};

export default App;
