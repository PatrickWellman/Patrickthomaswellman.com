import React from 'react';
import Landing from './Landing';
import Blogpost from './Blogpost';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import '../App.css';

const App = () => {
	return (
		<div>
			<Landing />
			<Blogpost />
			<Blogpost />

			<CommentDetail date="Nov 20 1985" author="Patrick" comment="I fucking love the BVI" />

			<CommentDetail date="Sep 11 2001" author="Tiffany" comment="I cant wait to move to LA" />

			<CommentDetail date="Apr 20 2020" author="Rohan" comment="Ready for the tasting menu at somni!" />
		</div>
	);
};

export default App;
