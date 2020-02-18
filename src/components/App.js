import React from 'react';
import Landing from './Landing';
import BlogPostList from './BlogPostList';
import CommentDetail from './CommentDetail';
import Navbar from './Navbar';
import ApprovalCard from './ApprovalCard';
import '../App.css';

const App = () => {
	return (
		<div>
			<Landing />
			<BlogPostList />

			<CommentDetail date="Nov 20 1985" author="Patrick" comment="Drew is coming back!" />

			<CommentDetail date="Sep 11 2001" author="Tiffany" comment="I cant wait to move to LA" />

			<CommentDetail date="Apr 20 2020" author="Rohan" comment="Ready for the tasting menu at somni!" />
		</div>
	);
};

export default App;
