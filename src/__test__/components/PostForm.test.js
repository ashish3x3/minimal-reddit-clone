import React from 'react';
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-15');
Enzyme.configure({ adapter: new EnzymeAdapter() });

import { shallow, mount, render } from 'enzyme';
import { PostForm }  from '../../PostForm';
import configureStore from 'redux-mock-store';
import TestUtils from 'react-dom/test-utils';

const mockStore = configureStore();

describe('PostForm Component', () => {
	let wrapper;
	let store;

	const initialState = [];
	store = mockStore(initialState)

	const props = {
		post: store,
	}
	let dispatchedAction;
	let expectedAction =  { type: 'ADD_POST'}
	let dispatchMock = jest.fn();

	const mockProps = {
	    submitMessageHandler: jest.fn(),
	};

	afterEach(() => {
	    mockProps.submitMessageHandler.mockReset();
	});

	beforeEach(() => {

		wrapper = shallow(<PostForm store = {store} dispatch={dispatchMock}/>);

	});

	it('form should render without crashing', () => {
		expect(wrapper.find('.post-container').length).toEqual(1);
	})

	it('form should have form element', () => {
		expect(wrapper.find('form').length).toEqual(1);
	})

	it('form should have input', () => {
		expect(wrapper.find('input').length).toEqual(1);
	})

	it('form should have textarea', () => {
		expect(wrapper.find('textarea').length).toEqual(1);
	})

	it('form should have button', () => {
		expect(wrapper.find('button').length).toEqual(1);
	})
});
