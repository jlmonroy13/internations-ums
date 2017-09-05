import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectForm extends Component {
  constructor() {
    super();
    this.state = {
      itemId: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const { itemId } = this.state;
    const { type, urlId } = this.props;
    if (type === 'user') {
      this.props.addGroupToUser(urlId, itemId);
    } else {
      this.props.addUserToGroup(urlId, itemId);
    }
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  render() {
    const { type, items } = this.props;
    const className = type === 'user' ? 'group' : 'user';
    function onRenderOptions(item) {
      return (
        <option value={item.id} key={item.id}>
          {className === 'group' ? item.name : `${item.firstName} ${item.lastName}`}
        </option>
      );
    }
    return (
      <form onSubmit={this.handleSubmit} className="list__select-form">
        <label htmlFor="items" className="form__label" />
        <div className="list__select-container">
          <select className="list__select" id="itemId" name="itemId" onChange={this.handleChange}>
            <option value="">{`Add ${className}`}</option>
            {items.map(onRenderOptions)}
          </select>
        </div>
        <button type="submit" className="list__select-button" disabled={!this.state.itemId} >
          <span className={`list__button icon icon--add-${className}`} />
        </button>
      </form>
    );
  }
}

SelectForm.propTypes = {
  type: PropTypes.string.isRequired,
  urlId: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  addGroupToUser: PropTypes.func.isRequired,
  addUserToGroup: PropTypes.func.isRequired,
};

export default SelectForm;
