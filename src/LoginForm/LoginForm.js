import React, { Component } from "react";
import TokenService from "../Services/token-service";
import AuthApiService from "../Services/auth-api-service";

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = {
    error: null,
    user_name: null,
    password: null,

    touched: false
  };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({
      error: null
    });
    const { user_name, password } = ev.target;
    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })

      .then(res => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({
          error: res.error
        });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>

        <input
          required
          name="user_name"
          placeholder="Username"
          className="loginInput"
        ></input>

        <input
          required
          name="password"
          placeholder="Password"
          type="password"
          className="loginInput"
        ></input>
        <button type="submit" className="login">
          Login
        </button>
      </form>
    );
  }
}
