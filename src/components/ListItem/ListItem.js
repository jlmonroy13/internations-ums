import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

function ListItem({
  data,
  type,
  page,
  urlId,
  deleteGroupFromUser,
  deleteUserFromGroup,
  itemsLength,
}) {
  const { urlPhoto, name, description, email, firstName, lastName, id } = data;
  const fullName = `${firstName} ${lastName}`;
  let link = type;
  if (page === 'details' && type === 'user') link = 'group';
  if (page === 'details' && type === 'group') link = 'user';

  function testingClick() {
    if (type === 'user') {
      deleteGroupFromUser(urlId, id);
    } else {
      deleteUserFromGroup(urlId, id);
    }
  }
  return (
    <li className="list__item">
      <Link className="list__item-link" to={`/${link}/${id}`} />
      <img src={urlPhoto} alt="Group photo" className="list__item-image" />
      <div className="list__item-info">
        <span className="list__item-text">{name || fullName}</span>
        <span className="list__item-text list__item-text--small list__item-text--dots">
          {description || email}
        </span>
        {page === 'details' && ((type === 'user' && itemsLength !== 1) || type === 'group') ? (
          <span className="list__item-btn icon icon--exit" onClick={testingClick} />
        ) : null}
      </div>
    </li>
  );
}

ListItem.propTypes = {
  data: PropTypes.object,
  type: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  urlId: PropTypes.string,
  itemsLength: PropTypes.number,
  deleteGroupFromUser: PropTypes.func,
  deleteUserFromGroup: PropTypes.func,
};

export default ListItem;
