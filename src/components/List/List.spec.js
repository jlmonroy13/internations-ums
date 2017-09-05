import React from 'react';
import renderer from 'react-test-renderer';
import List from './List';
import { Provider } from 'react-redux';
import initialState from '../../store/initialState';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';

describe('<List />', () => {
  it('should render the list component', () => {
    const middlewares = [thunk.withExtraArgument(getFirebase)];
    const mockStore = configureStore(middlewares);
    const store = mockStore(initialState);
    const wrapper = renderer.create(
      <Provider store={store}>
        <List type="" title="" page="" urlId="" />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
