import React from 'react';
import Landing from './Landing';
import AboutMe from './AboutMe';
import BlogPostList from './BlogPostList';
import CommentSection from './CommentSection';
import ImageGrid from './ImageGrid';
import ImageDisplay from './ImageDisplay';
import QuoteBox from "./QuoteBox";
import ImageExampleImageProps from './Image';
import Navigation from './Navigation';

import '../App.css';

const App = () => {
	return (
		<div>
			
			<Landing />

			<BlogPostList />

			<ImageDisplay />
		</div>
	);
};

export default App;
