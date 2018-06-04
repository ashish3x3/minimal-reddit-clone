import React from 'react';

const Enzyme = require('enzyme');
// this is where we reference the adapter package we installed earlier
const EnzymeAdapter = require('enzyme-adapter-react-15');
// This sets up the adapter to be used by Enzyme
Enzyme.configure({ adapter: new EnzymeAdapter() });


import { shallow, mount, render } from 'enzyme';
import { Post } from '../../Post';
import configureStore from 'redux-mock-store';
import TestUtils from 'react-dom/test-utils';
import sinon from 'sinon';

const mockStore = configureStore();


describe('Post Component', () => {
	let wrapper;
	let store;

	const initialState = [{title:'random title', message:'random message', id:'random id'}];
	const myFnProp = jest.fn();

	store = mockStore(initialState)

	const props = {
		post: store,
		id: initialState[0].id
	}
	let dispatchedAction;
	let expectedAction =  { type: 'DELETE_POST'}
	let dispatchMock = jest.fn();

	beforeEach(() => {

		wrapper = mount(<Post post={props.post} dispatch={dispatchMock} />);

	});

	it('should render without throwing an error', () => {
		expect(wrapper.exists()).toBe(true)
	});

	it('renders a post title', () => {
		expect(wrapper.find('.post_title').length).toEqual(1);

	})

	it('renders a post message', () => {
		expect(wrapper.find('.post_message').length).toEqual(1)
	})

	it('renders 5 control buttons', () => {
		expect(wrapper.find('.control-buttons > button').length).toEqual(5)
	})

	it('calls dispatch on button clicked', () => {
		wrapper.find('button .delete').simulate('click');
		expect(dispatchMock).toHaveBeenCalled();

	})
});

















