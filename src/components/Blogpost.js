import React from 'react';
import { blogPost } from './constants';
import {Container} from 'semantic-ui-react'

class BlogPost extends React.Component {
	render() {
		return (
			< div >
			
				{blogPost &&
					blogPost.map((post) => {
						console.log(post);
						return (
							<div className="post">
								<div className="date">{post.date}</div>
								<h2>{post.location}</h2>
								<p className="quote">{post.p1}</p>
								<p>{post.p2}</p>
							</div>
						);
					})}
					
			</div>
		);
	}
}

export default BlogPost;
