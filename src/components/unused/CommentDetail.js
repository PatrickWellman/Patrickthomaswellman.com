import React from 'react';
import './commentDetail.css';

const CommentDetail = (props) => {
	return (
		<div className="content">
			<div className="author"> {props.author} </div>
			<div className="metadata">
				<span className="date"> {props.date} </span>
			</div>
			<div className="text">{props.comment}</div>
		</div>
	);
};

export default CommentDetail;
