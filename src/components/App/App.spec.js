import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import { Provider } from 'react-redux';
import initialState from '../../store/initialState';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';

describe('<App />', () => {
  it('should render the app component', () => {
    const middlewares = [thunk.withExtraArgument(getFirebase)];
    const mockStore = configureStore(middlewares);
    const store = mockStore(initialState);
    const getUserInfo = jest.fn();
    const wrapper = renderer.create(
      <Provider store={store}>
        <App getUserInfo={getUserInfo}>
          <span />
        </App>
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
