import React from 'react';
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-15');
Enzyme.configure({ adapter: new EnzymeAdapter() });

import { shallow, mount, render } from 'enzyme';
import App  from '../../App';
import { PostForm }  from '../../PostForm';
import { AllPost }  from '../../AllPost';

import configureStore from 'redux-mock-store';
import TestUtils from 'react-dom/test-utils';
import { Provider } from 'react-redux';


const mockStore = configureStore();

describe('App Component', () => {
	let wrapper;
	let store;

	const initialState = [];
	store = mockStore(initialState)

	const props = {
		post: store,
	}

	beforeEach(() => {

		wrapper = mount(<Provider store={store}>
				<App />
				</Provider>);

	});

	it('App should render Alone without crashing', () => {
		wrapper = shallow(<App />);
		expect(wrapper.exists()).toBe(true)
	});

	it('App should render with other child components without crashing', () => {
		expect(wrapper.exists()).toBe(true);

	});

	it('App should render PostForm child components without crashing', () => {
		expect(wrapper.find(PostForm).length).toEqual(1);
	});

	it('App should render AllPost child components without crashing', () => {
		expect(wrapper.find(AllPost).length).toEqual(1);
	});
});

