import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

function EmptyNoUserMsg({ type }) {
  const elementsListType = type === 'user' ? 'group' : 'user';
  return (
    <div>
      <p className="flush--bottom push--top">
        {`There is not ${elementsListType} created yet in your UMS to add to this ${type}.`}
      </p>
      <p>
        Please go to{' '}
        <Link to={`/${elementsListType}s`} className="pink bold">
          {`${elementsListType}s page`}
        </Link>{' '}
        to create one.
      </p>
    </div>
  );
}

EmptyNoUserMsg.propTypes = {
  type: PropTypes.string.isRequired,
};

export default EmptyNoUserMsg;
