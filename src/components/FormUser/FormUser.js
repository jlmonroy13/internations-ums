import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormField from '../FormField';

class FormUser extends Component {
  constructor() {
    super();
    this.state = {
      file: [],
      firstName: '',
      lastName: '',
      email: '',
      group: '',
      facebook: '',
      twitter: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFileInput = this.handleChangeFileInput.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const { file, group, ...rest } = this.state;
    this.props.createUser(rest, file, group);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value,
    }));
  }
  handleChangeFileInput(event) {
    event.preventDefault();
    const { files } = event.target;
    this.setState(() => ({
      file: files[0],
    }));
  }

  render() {
    const { groups } = this.props;
    function onRenderGroupsOptions(acc, group) {
      if (group && group.id) {
        acc.push(
          <option value={group.id} key={group.id}>
            {group.name}
          </option>,
        );
      }
      return acc;
    }
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form__field">
          <label className="form__label-file" htmlFor="photo">
            Load photo
          </label>
          <input
            className="form__input"
            type="file"
            id="photo"
            onChange={this.handleChangeFileInput}
            required={true}
          />
        </div>
        <FormField
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
          required={true}
        />
        <FormField
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
          required={true}
        />
        <FormField
          type="email"
          id="email"
          name="email"
          placeholder="email@test.com"
          onChange={this.handleChange}
          required={true}
        />
        <div className="form__field">
          <label className="form__label" htmlFor="group" />
          <div className="form__select-container">
            <select
              className="form__select"
              id="group"
              name="group"
              onChange={this.handleChange}
              required={true}
            >
              <option value="">Select a group</option>
              {groups.reduce(onRenderGroupsOptions, [])}
            </select>
          </div>
        </div>
        <FormField
          type="text"
          id="facebook"
          name="facebook"
          placeholder="Facebook"
          onChange={this.handleChange}
          required={true}
        />
        <FormField
          type="text"
          id="twitter"
          name="twitter"
          placeholder="Twitter"
          onChange={this.handleChange}
          required={true}
        />
        <button className="button button--primary push--top" type="submit">
          Add
        </button>
      </form>
    );
  }
}

FormUser.propTypes = {
  createUser: PropTypes.func.isRequired,
  groups: PropTypes.array,
};

export default FormUser;
