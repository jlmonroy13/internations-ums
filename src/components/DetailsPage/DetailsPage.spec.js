import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import DetailsPage from './DetailsPage';
import { reactReduxFirebase } from 'react-redux-firebase';
import fbConfig from '../../constants/firebaseConfig';
import { createStore, compose, combineReducers } from 'redux';

describe('<DetailsPage />', () => {
  it('should render the details page component', () => {
    const data = {
      firstName: '',
      lastName: '',
      email: '',
      facebook: '',
      twitter: '',
      urlPhoto: '',
      name: '',
      description: '',
      user: '',
      group: '',
      id: '',
    };
    const createStoreWithMiddleware = compose(
      reactReduxFirebase(fbConfig, { userProfile: 'users' }),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension()
        : f => f,
    )(createStore);
    const store = createStoreWithMiddleware(combineReducers({ test: (state = {}) => state }));
    const wrapper = renderer.create(
      <Provider store={store}>
        <DetailsPage isAnUser={true} type="" data={data} />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
