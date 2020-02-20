import React from 'react';
import Landing from './Landing';
import AboutMe from './AboutMe';
import BlogPostList from './BlogPostList';
import CommentSection from './CommentSection';
import ImageGrid from './ImageGrid';
import ImageDisplay from './ImageDisplay';
import ImageExampleImageProps from './Image';

import '../App.css';

const App = () => {
	return (
		<div>
			<Landing />
			<AboutMe />
			<BlogPostList />
			<CommentSection />

			<ImageDisplay />
		</div>
	);
};

export default App;
