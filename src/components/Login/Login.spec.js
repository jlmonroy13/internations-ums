import React from 'react';
import renderer from 'react-test-renderer';
import Login from './Login';

describe('<Login />', () => {
  it('should render the login component', () => {
    const login = jest.fn();
    const wrapper = renderer.create(<Login login={login} />);
    expect(wrapper).toMatchSnapshot();
  });
});
