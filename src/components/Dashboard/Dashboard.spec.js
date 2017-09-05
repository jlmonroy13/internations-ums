import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import initialState from '../../store/initialState';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('should render the dashboard component', () => {
    const middlewares = [thunk.withExtraArgument(getFirebase)];
    const mockStore = configureStore(middlewares);
    const store = mockStore(initialState);
    const wrapper = renderer.create(
      <Provider store={store}>
        <Dashboard>
          <span />
        </Dashboard>
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
