import React from 'react';
import Landing from './Landing';
import AboutMe from './AboutMe';
import BlogPostList from './BlogPostList';
import ImageGrid from './ImageGrid';
import ImageDisplay from './ImageDisplay';
import Navigation from './Navigation';

import '../App.css';

const App = () => {
	return (
		<div>
			<Landing />
			<ImageGrid />

			<BlogPostList />
		</div>
	);
};

export default App;
