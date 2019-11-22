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
    console.log(bag_name.value, situations.value);

    BagsApiService.createNewBag({
        bag_name: bag_name.value,
        situations: situations.value
    })
    .then(bag_id => this.props.history.push(`/bag-home/${bag_id}`));
    bag_name.value = ''
    situations.value= ''
  }

  // renderInputs() {
  //   console.log(this.props);
  //     const situations = ['Quake','Flood', 'Fire', 'any'];
  //     return situations.map(sit => 
  //       <div className='situation' key={Math.random()}>
  //       <label htmlFor='NewBagForm__situation'>
  //         {sit}
  //       </label>
  //       <Input
  //         required
  //         key={Math.random()}
  //         name={'situations'}
  //         type='radio'
  //         value={sit}
  //         id={`NewBagForm__${sit}`}>
  //       </Input>
  //     </div>
  //       )
  // }

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
          <option value="any">All Purpose</option>
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
