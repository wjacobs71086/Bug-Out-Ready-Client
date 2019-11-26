import React, { Component } from 'react';
import { Button, Input } from '../Utils/Utils';
import BagsApiService from '../Services/bags-api-service';

export default class NewBagForm extends Component {
  static defaultProps = {
    onBagCreationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { bag_name, situations } = ev.target;
    BagsApiService.createNewBag({
        bag_name: bag_name.value,
        situations: situations.value
    })
    .then(bag_id => this.props.history.push(`/bag-home/${bag_id}`));
    bag_name.value = ''
    situations.value= ''
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='NewBagForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='bag_name'>
          <label htmlFor='NewBagForm__bag_name'>
            Bag name
          </label>
          <Input
            required
            name='bag_name'
            id='NewBagForm__bag_name'>
          </Input>
        </div>

        <select required name="situations">
          <option value="Everything">Everything</option>
          <option value="Quake">Earthquake</option>
          <option value="Fire">Wild Fire</option>
          <option value="Flood">Flash Flood</option>
        </select>

        <Button type='submit'>
          Submit
        </Button>
      </form>
    )
  }
}