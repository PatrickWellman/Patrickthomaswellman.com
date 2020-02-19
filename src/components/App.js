import React from 'react';
import Landing from './Landing';
import BlogPostList from './BlogPostList';
import CommentSection from './CommentSection';
import CommentDetail from './CommentDetail';
import Navbar from './Navbar';
import ApprovalCard from './ApprovalCard';
import '../App.css';

const App = () => {
	return (
		<div>
			<Landing />
			<BlogPostList />
			<CommentSection />

			
		</div>
	);
};

export default App;
