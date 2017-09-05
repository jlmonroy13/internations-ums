import React from 'react';
import renderer from 'react-test-renderer';
import AccountFormField from './AccountFormField';

describe('<AccountFormField />', () => {
  it('should render the account form field component', () => {
    const wrapper = renderer.create(<AccountFormField id="email" iconName="user" />);
    expect(wrapper).toMatchSnapshot();
  });
});
