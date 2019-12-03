import React, { Component } from 'react';
import { Button, Input } from '../Utils/Utils';
import TokenService from '../Services/token-service';
import AuthApiService from '../Services/auth-api-service';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => { }
  }

  state = { 
    error: null,
    user_name: null,
    password: null,
    touched: false
  }


  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({
      error: null,
    })
    const { user_name, password } = ev.target;
    // const validatedPassword = this.validatePassword(password.value);

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({
          error: res.error
        })
      })
  };

  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name' className='LoginForm__user_name'>
            User name
          </label>
          <Input
            required
            name='user_name'
            placeholder='ready'
            id='LoginForm__user_name'>
          </Input>
        </div>
        
        <div className='password'>
          <label 
            htmlFor='password' 
            className='password'>
            Password
          </label>

          <Input
            required
            name='password'
            placeholder='go'
            type='password'
            // onChange={this.handleChange}
            id='password'>
          </Input>
        </div>

        <Button 
          type='submit'
          className='login'
          >
          Login
        </Button>
      </form>
    )
  }
}