import React from 'react';
import renderer from 'react-test-renderer';
import SidebarNav from './SidebarNav';

describe('<SidebarNav />', () => {
  it('should render the sidebar nav component', () => {
    const logout = jest.fn();
    const wrapper = renderer.create(<SidebarNav url="" logout={logout} isNavOpen={true}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
