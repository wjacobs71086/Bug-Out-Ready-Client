import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils';
import './SignUpForm.css';
import BagLogo from '../bags_bag_handbag_accessory_accessories-19-512.png';
export default class SignUpForm extends Component {
  static defaultProps = {
    onSignUpSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const {user_name, password } = ev.target
    let newUser = {user_name: user_name.value, password:password.value};
    this.props.onSignUpSuccess(newUser)
    user_name.value = ''
    password.value = ''
  }

  render() {
    const { error } = this.state
    return (
      <div>
      <img className='logo' src={BagLogo} alt=''></img>
      <form
        className='SignUpForm'
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
        <Button 
          className='registerButton'
          type='submit'>
          Register
        </Button>
      </form>
      </div>
    )
  }
}
