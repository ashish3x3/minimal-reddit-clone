import React, { Component } from 'react';
import PostForm from './PostForm';
import { Filter } from './Filter';

import VisiblePostList from './containers/VisiblePostList';

/* This is the first component which will het loaded onto screen. It will be called from index.js wrapped inside a redux store provider. It displays components for Filter, PostForm and VisiblePostList */
class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="navbar">
			    	<h2 className="center ">Minimal Reddit Clone</h2>
				</div>
		  		<Filter />
		  		<PostForm />
		    	<VisiblePostList />
			</div>
		);
	}
}
export default App;