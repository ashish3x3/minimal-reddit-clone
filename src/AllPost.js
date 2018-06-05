import React, { Component } from 'react';
import Post from './Post';
import EditComponent from './EditComponent';

class AllPost extends Component {
	render() {
		return (
		<div>
			<h1 className="post_heading">All Posts</h1>
			{this.props.posts.map((post) => (
				<div key={post.id}>
					{post.editing ? <EditComponent post={post} key={post.id} /> :
									<Post post={post} key={post.id} />}
				</div>
			))}
		</div>
		);
	}
}

export default AllPost;