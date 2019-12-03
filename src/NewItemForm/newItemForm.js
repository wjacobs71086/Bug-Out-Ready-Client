import React, { Component } from 'react';
import { Button, Input } from '../Utils/Utils';
import ItemsApiService from '../Services/items-api-service';

export default class NewItemForm extends Component {
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
    console.log('item_name entered as', item_name.value);
    console.log('url entered as', url.value);
    console.log('img entered as', img.value);
    console.log('description entered as', description.value);
    console.log('est_cost entered as', est_cost.value);
    // ItemsApiService.createNewItem( bag_id, item_name, url, img, description, est_cost)
    // call a re-render of the page/ items/bagsList.

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
            Item name
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
            Item Url
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
            Item Image Url
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
            Item Description
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
            Item Estimated Cost
          </label>
          <Input
            required
            name='est_cost'
            placeholder='15.99'
            id='NewItemForm__item_cost'>
          </Input>
        </div>


        <Button 
          type='submit'
          className='submit'
          >
          Submit
        </Button>
      </form>
    )
  }
}