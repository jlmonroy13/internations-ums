import React from 'react';
import PropTypes from 'prop-types';

function Header({ setNavState, isNavOpen }) {
  function onSetNavState() {
    setNavState(!isNavOpen);
  }
  return (
    <header className="header">
      <h1 className="header__title">
        <span className="icon icon--logo" /> InterNations{' '}
        <span className="header__title--pink">UMS</span>
      </h1>
      <span className="icon icon--menu header__btn" onClick={onSetNavState}/>
    </header>
  );
}

Header.propTypes = {
  setNavState: PropTypes.func,
  isNavOpen: PropTypes.bool,
};

export default Header;
