import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

/* Creating store for our app. This will store various states of our application in a single place and will act as source of truth */
const store = createStore(rootReducer);

/* This renders the App component to the screen which will display a Form for user to create topics, 3 buttons for segregating topics and a section to display all topics*/
ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>, document.getElementById('root')
	);