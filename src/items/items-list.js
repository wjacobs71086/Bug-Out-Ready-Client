import React, { Component } from 'react';
import Item from './item';

import ItemsListContext from '../context/items-context';
import ItemsApiService from '../Services/items-api-service';



export class ItemsList extends Component {
    static contextType = ItemsListContext

    componentDidMount() {
      this.context.clearError()
      ItemsApiService.getThings()
        .then(this.context.setItemsList)
        .catch(this.context.setError)
    }

  renderItems() {
    const { itemsList = [] } = this.context;
    return itemsList.map(item =>
      <Item
        key={item.id}
        itemName={item.item_name}
        itemUrl={item.url}
        itemImg={item.img}
        itemDesc={item.description}
        itemCost={item.est_cost}
      />
    )
  }

    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        )
    }
}

export default ItemsList;
