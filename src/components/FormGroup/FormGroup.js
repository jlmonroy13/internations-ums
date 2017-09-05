import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormField from '../FormField';

class FormGroup extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      file: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFileInput = this.handleChangeFileInput.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const { file, ...rest } = this.state;
    this.props.createGroup(rest, file);
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
          id="name"
          name="name"
          placeholder="Group Name"
          onChange={this.handleChange}
          required={true}
        />
        <div className="form__field">
          <label className="sr-only" htmlFor="description">
            Description
          </label>
          <textarea
            className="form__textarea"
            type="text"
            id="description"
            name="description"
            placeholder="This group is for ..."
            onChange={this.handleChange}
            required={true}
          />
        </div>
        <button className="button button--primary push--top" type="submit">
          Add
        </button>
      </form>
    );
  }
}

FormGroup.propTypes = {
  createGroup: PropTypes.func.isRequired,
};

export default FormGroup;
