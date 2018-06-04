import React from 'react';
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-15');
Enzyme.configure({ adapter: new EnzymeAdapter() });

import { shallow, mount, render } from 'enzyme';
import { AllPost }  from '../../AllPost';


import configureStore from 'redux-mock-store';
import TestUtils from 'react-dom/test-utils';

const mockStore = configureStore();

describe('ALl Post Component', () => {
	let wrapper;
	let store;

	const initialState = [{title:'random title', message:'random message', id:'random id', editing:false}];
	store = mockStore(initialState)

	const props = {
		post: initialState
	}

	beforeEach(() => {
		wrapper = shallow(<AllPost posts={props.post} store={store}/>);
	});

	it('App should render Alone without crashing', () => {
		expect(wrapper.exists()).toBe(true)
	});
});

