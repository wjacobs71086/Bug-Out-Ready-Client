import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils';

export default class SignUpForm extends Component {
  static defaultProps = {
    onSignUpSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const {user_name, password } = ev.target
    let newUser = {user_name: user_name.value, password:password.value};
    console.log('Sign-up form submitted')
    console.log(newUser);
    this.props.onSignUpSuccess(newUser)
    user_name.value = ''
    password.value = ''
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='SignUpnForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='SignUpForm__user_name'>
            User name <Required />
          </label>
          <Input
            name='user_name'
            type='text'
            required
            id='SignUpForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='SignUpForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='SignUpForm__password'>
          </Input>
        </div>
        <Button type='submit'>
          Register
        </Button>
      </form>
    )
  }
}
