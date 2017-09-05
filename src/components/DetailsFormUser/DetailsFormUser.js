import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DetailsFormUser extends Component {
  constructor(props) {
    super(props);
    const { firstName, lastName, email, facebook, twitter } = props.data;
    this.state = {
      file: [],
      firstName,
      lastName,
      email,
      facebook,
      twitter,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFileInput = this.handleChangeFileInput.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const { file, ...rest } = this.state;
    this.props.updateUser(rest, file);
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
    const { firstName, lastName, email, facebook, twitter } = this.state;
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
          <div className="grid">
            <div className="grid__item medium--one-half">
              <div className="form__field">
                <label htmlFor="firstName" className="sr-only">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="form__input"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={this.handleChange}
                  required={true}
                />
              </div>
            </div>
            <div className="grid__item medium--one-half">
              <div className="form__field">
                <label htmlFor="firstName" className="sr-only">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form__input"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={this.handleChange}
                  required={true}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="form__field">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                placeholder="email@email.com"
                className="form__input"
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                required={true}
              />
            </div>
          </div>
          <div>
            <div className="form__field">
              <label htmlFor="facebook" className="sr-only">
                Facebook
              </label>
              <input
                type="text"
                placeholder="Facebook"
                className="form__input"
                id="facebook"
                name="facebook"
                value={facebook}
                onChange={this.handleChange}
                required={true}
              />
            </div>
          </div>
          <div>
            <div className="form__field">
              <label htmlFor="twitter" className="sr-only">
                Twitter
              </label>
              <input
                type="text"
                placeholder="Twitter"
                className="form__input"
                id="twitter"
                name="twitter"
                value={twitter}
                onChange={this.handleChange}
                required={true}
              />
            </div>
          </div>
        </div>
        <button className="button button--primary push--top" type="submit">
          Update
        </button>
      </form>
    );
  }
}

DetailsFormUser.propTypes = {
  updateUser: PropTypes.func.isRequired,
  data: PropTypes.object,
};

export default DetailsFormUser;
