import React from 'react';
import PropTypes from 'prop-types';

function DetailsInfo({ data, isAnUser, listLength }) {
  const { firstName, lastName, email, facebook, twitter, urlPhoto, name, description } = data;
  const inlineStyles = {
    backgroundImage: `url(${urlPhoto})`,
  };
  return (
    <div className ="details__info-container">
      <span className="details__photo" style={inlineStyles} />
      {isAnUser ? (
        <div className="details__info">
          <h1 className="details__info-title">{`${firstName} ${lastName}`}</h1>
          <p className="details__info-text">
            <span className="icon icon--mail details__info-icon details__info-icon--mail" />
            <span className="vertical-align--middle">{email}</span>
          </p>
          <p className="details__info-text">
            <span className="icon icon--facebook details__info-icon details__info-icon--facebook" />
            <span className="vertical-align--middle">{facebook}</span>
          </p>
          <p className="details__info-text">
            <span className="icon icon--twitter details__info-icon details__info-icon--twitter" />
            <span className="vertical-align--middle">{twitter}</span>
          </p>
        </div>
      ) : (
        <div className="details__info">
          <h1 className="details__info-title">{`${name} group`}</h1>
          <p className="details__info-label">Description</p>
          <p className="details__info-text">{description}</p>
          <p className="details__info-label">Number of users</p>
          <p className="details__info-text">{listLength}</p>
        </div>
      )}
    </div>
  );
}

DetailsInfo.propTypes = {
  data: PropTypes.object.isRequired,
  isAnUser: PropTypes.bool.isRequired,
  listLength: PropTypes.number.isRequired,
};

export default DetailsInfo;
