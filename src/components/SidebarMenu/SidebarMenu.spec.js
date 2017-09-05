import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import SidebarMenu from './SidebarMenu';
import { reactReduxFirebase } from 'react-redux-firebase';
import fbConfig from '../../constants/firebaseConfig';
import { createStore, compose, combineReducers } from 'redux';

describe('<SidebarMenu />', () => {
  it('should render the sidebar menu component', () => {
    const createStoreWithMiddleware = compose(
      reactReduxFirebase(fbConfig, { userProfile: 'users' }),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension()
        : f => f,
    )(createStore);
    const store = createStoreWithMiddleware(combineReducers({ test: (state = {}) => state }));
    const wrapper = renderer.create(
      <Provider store={store}>
        <SidebarMenu isAnUser={true} type="" />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
