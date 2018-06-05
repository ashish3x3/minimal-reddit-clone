

/* Test class for ALlPost Component*/

import React from 'react';

/* This is bare minimum requirement for using Enzyme for testing */
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-15');
Enzyme.configure({ adapter: new EnzymeAdapter() });

import { shallow, mount, render } from 'enzyme';
import AllPost from '../../AllPost';
import configureStore from 'redux-mock-store';
import TestUtils from 'react-dom/test-utils';

/* creating a mock store to replication redux store concept in testing. Thsi will act as a source of truth of our testing.*/
const mockStore = configureStore();

describe('Checking AllPost Component', () => {
	let wrapper;
	let store;

	/* creating initial state of our application for testing */
	const initialState = {postReducer:[{title:'random title', message:'random message', id:'random id', editing:false}]};

	/* passing initial state to the store */
	store = mockStore(initialState)

	const props = {
		post: initialState.postReducer
	}

	beforeEach(() => {
		wrapper = shallow(<AllPost posts = {props.post}/>);
	});

	it('App should render Alone without crashing', () => {
		expect(wrapper.exists()).toBe(true)
	});
});

