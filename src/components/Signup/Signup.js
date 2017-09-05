import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import AccountFormField from '../AccountFormField/';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const { email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState(() => ({
        errorMessage: 'Passwords do not match.',
      }));
    } else {
      this.props.createAccount({ email, password }).then((response) => {
        if (response.message) {
          this.setState(() => ({
            errorMessage: response.message,
          }));
        }
      });
    }
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value,
      errorMessage: '',
    }));
  }
  render() {
    const { email, password, confirmPassword, errorMessage } = this.state;
    return (
      <div className="grid__item medium--one-half">
        <section className="account-box">
          <h1 className="account-box__title">Sign up</h1>
          <form onSubmit={event => this.handleSubmit(event)}>
            <div className="push-triple--bottom relative">
              <AccountFormField
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                iconName="user"
                type="email"
                required={true}
                onChange={event => this.handleChange(event)}
              />
              <AccountFormField
                placeholder="Password"
                id="password"
                name="password"
                value={password}
                iconName="lock"
                type="password"
                required={true}
                onChange={event => this.handleChange(event)}
              />
              <AccountFormField
                placeholder="Confirm password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                iconName="lock"
                type="password"
                required={true}
                onChange={event => this.handleChange(event)}
              />
              <div className="account-box__error-message">{errorMessage}</div>
            </div>
            <button className="button button--submit" type="submit">
              Create Account
            </button>
          </form>
        </section>
        <div className="account__message">
          Already have an account? <Link to="/">Log in</Link>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  createAccount: PropTypes.func.isRequired,
};

export default Signup;
