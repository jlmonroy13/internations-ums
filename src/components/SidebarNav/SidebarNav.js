import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

function SidebarNav({ url, logout, isNavOpen }) {
  const mobileClass = isNavOpen ? 'sidebar-nav__mobile' : '';
  return (
    <nav className={`sidebar-nav ${mobileClass}`}>
      <Link className={`sidebar-nav__btn ${url === 'users' ? 'is-active' : ''}`} to="/users" >
        <span className="sidebar-nav__btn-icon icon icon--users" />
        <span className="sidebar-nav__btn-text">Users</span>
      </Link>
      <Link className={`sidebar-nav__btn ${url === 'groups' ? 'is-active' : ''}`} to="/groups">
        <span className="sidebar-nav__btn-icon icon icon--group" />
        <span className="sidebar-nav__btn-text">Groups</span>
      </Link>
      <div className="sidebar-nav__btn" onClick={logout}>
        <span className="sidebar-nav__btn-icon icon icon--log-out" />
        <span className="sidebar-nav__btn-text">Log out</span>
      </div>
    </nav>
  );
}

SidebarNav.propTypes = {
  url: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  isNavOpen: PropTypes.bool.isRequired,
};

export default SidebarNav;
