import React from 'react';
import renderer from 'react-test-renderer';
import FormUser from './FormUser';

describe('<FormUser />', () => {
  it('should render the form user component', () => {
    const createUser = jest.fn();
    const wrapper = renderer.create(<FormUser createUser={createUser} groups={[]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});