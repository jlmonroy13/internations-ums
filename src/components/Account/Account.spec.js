import React from 'react';
import renderer from 'react-test-renderer';
import Account from './Account';

describe('<Account />', () => {
  it('should render the account component', () => {
    const wrapper = renderer.create(
      <Account>
        <span />
      </Account>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
