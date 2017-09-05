import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../FormGroup/';
import FormUser from '../FormUser/';

function SidebarMenu({ isAnUser, type, enableUsers, isMenuOpen, setMenuState }) {
  function onSetMenuState() {
    setMenuState(!isMenuOpen);
  }
  const mobileClass = isMenuOpen ? 'sidebar-menu__mobile' : '';
  return (
    <aside className={`sidebar-menu ${mobileClass} ${enableUsers ? '' : 'hidden'}`}>
      {isMenuOpen ? (
        <span className="sidebar-menu__cross icon icon--cross" onClick={onSetMenuState} />
      ) : null}
      <h1 className="sidebar-menu__title">
        Add<span className="capitalize">{` ${type}`}</span>
      </h1>
      {isAnUser ? <FormUser /> : <FormGroup />}
    </aside>
  );
}

SidebarMenu.propTypes = {
  isAnUser: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  enableUsers: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
  setMenuState: PropTypes.func,
};

export default SidebarMenu;
