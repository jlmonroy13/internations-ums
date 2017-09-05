import React from 'react';
import PropTypes from 'prop-types';

function EmptySecton({ type, setMenuState, isMenuOpen }) {
  function onSetMenuState() {
    setMenuState(!isMenuOpen);
  }
  return (
    <div className="details__warning">
      <p className="text--larger flush--bottom">{`You don't have any ${type} yet.`}</p>
      <p className="text--large">Please add one.</p>
      <span className="details__warning-btn icon icon--plus" onClick={onSetMenuState} />
    </div>
  );
}

EmptySecton.propTypes = {
  type: PropTypes.string.isRequired,
  setMenuState: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default EmptySecton;
