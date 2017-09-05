import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DetailsFormGroup extends Component {
  constructor(props) {
    super(props);
    const { name, description } = props.data;
    this.state = {
      name,
      description,
      file: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFileInput = this.handleChangeFileInput.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const { file, ...rest } = this.state;
    this.props.updateGroup(rest, file);
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
        <div className="details__info">
          <div className="form__field">
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input
              className="form__input"
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required={true}
            />
          </div>
          <div className="form__field">
            <label className="sr-only" htmlFor="description">
              Description
            </label>
            <textarea
              className="form__textarea form__textarea--small"
              type="text"
              id="description"
              name="description"
              placeholder="This group is for ..."
              value={this.state.description}
              onChange={this.handleChange}
              required={true}
            />
          </div>
        </div>
        <button className="button button--primary push--top" type="submit">
          Update
        </button>
      </form>
    );
  }
}

DetailsFormGroup.propTypes = {
  updateGroup: PropTypes.func.isRequired,
  data: PropTypes.object,
};

export default DetailsFormGroup;
