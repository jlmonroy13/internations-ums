import React from 'react';
import renderer from 'react-test-renderer';
import Signup from './Signup';

describe('<Signup />', () => {
  it('should render the sign up component', () => {
    const createAccount = jest.fn();
    const wrapper = renderer.create(<Signup createAccount={createAccount} />);
    expect(wrapper).toMatchSnapshot();
  });
});
