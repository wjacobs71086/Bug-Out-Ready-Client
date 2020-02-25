import React, { Component } from 'react';
import { Button, Input } from '../Utils/Utils';
import ItemsApiService from '../Services/items-api-service';
import BagsApiService from "../Services/bags-api-service";
import ItemsListContext from "../context/items-context";



// Currently under construction. User beware. 
export default class NewItemForm extends Component {
  static contextType = ItemsListContext;

  static defaultProps = {

  }

  state = { 
    error: null,
    item_name: null,
    url: null,
    img: null,
    description: null,
    est_cost: null,
    touched: false
  }


  handleNewItemSubmit = ev => {
    ev.preventDefault();
    const { item_name, url, img, description, est_cost } = ev.target;
    let bag_id = this.props.bagId.bag_id;
    ItemsApiService.createNewItem(item_name.value,url.value,img.value, description.value,est_cost.value,bag_id)
      .then(res => console.log('this is the server response',res.end()))
      .catch(err => console.log('this is the error',err))

      BagsApiService.getBagsItems(bag_id)
      .then(res => {
        this.context.setItemsList(res);
        this.context.setBagsList(res);
      })
      .catch(this.context.setError);
       return this.props.handleNewItemButton()
  };

  render() {
    const { error } = this.state
    return (
      <form
        className='NewItemForm'
        onSubmit={this.handleNewItemSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='item_name'>
          <label htmlFor='NewItemForm__item_name' className='NewItemForm__item_name'>
            Item: 
          </label>
          <Input
            required
            name='item_name'
            placeholder='Flashlight'
            id='NewItemForm__item_name'>
          </Input>
        </div>

        <div className='item_url'>
          <label htmlFor='NewItemForm__item_url' className='NewItemForm__item_url'>
            Url: 
          </label>
          <Input
            required
            name='url'
            placeholder='www.amazon.com'
            id='NewItemForm__item_url'>
          </Input>
        </div>

        <div className='item_img'>
          <label htmlFor='NewItemForm__item_img' className='NewItemForm__item_img'>
            Image Url: 
          </label>
          <Input
            required
            name='img'
            placeholder='www.abc@123.com/123'
            id='NewItemForm__item_img'>
          </Input>
        </div>

        <div className='item_description'>
          <label htmlFor='NewItemForm__item_description' className='NewItemForm__item_description'>
            Description: 
          </label>
          <Input
            required
            name='description'
            placeholder='A must have'
            id='NewItemForm__item_description'>
          </Input>
        </div>

        <div className='item_cost'>
          <label htmlFor='NewItemForm__item_cost' className='NewItemForm__item_cost'>
            Estimated Cost: 
          </label>
          <Input
            required
            name='est_cost'
            placeholder='15.99'
            id='NewItemForm__item_cost'>
          </Input>
        </div>
      <div className='newFormButtonsContainer'>
        <Button 
        onClick={() => this.props.handleCancel()}
          className='submit'
          >
          Cancel
        </Button>
        <Button 
          type='submit'
          className='submit'
          >
          Submit
        </Button>
</div>
      </form>
    )
  }
}