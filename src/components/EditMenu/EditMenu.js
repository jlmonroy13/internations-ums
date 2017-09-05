import React from 'react';
import PropTypes from 'prop-types';

function EditMenu({
  editMode,
  setEditMode,
  deleteGroup,
  deleteUser,
  type,
  uId,
  id,
  listLength,
  itemsList,
}) {
  function onDeleteGroup() {
    if (type === 'group' && !listLength) deleteGroup(uId, id);
    if (type === 'user') deleteUser(uId, id, itemsList);
  }
  return (
    <div className="edit-menu">
      {editMode ? (
        <span
          className="edit-menu__icon icon icon--cross"
          onClick={() => {
            setEditMode(false);
          }}
        />
      ) : (
        <span>
          <span
            className="edit-menu__icon icon icon--edit"
            onClick={() => {
              setEditMode(true);
            }}
          />
          {(!listLength && type === 'group') || type === 'user' ? (
            <span className="edit-menu__icon icon icon--delete" onClick={onDeleteGroup} />
          ) : null}
        </span>
      )}
    </div>
  );
}

EditMenu.propTypes = {
  editMode: PropTypes.bool.isRequired,
  setEditMode: PropTypes.func.isRequired,
  deleteGroup: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  uId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  listLength: PropTypes.number.isRequired,
  itemsList: PropTypes.array.isRequired,
};

export default EditMenu;
