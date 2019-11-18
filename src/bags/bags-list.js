import React, { Component } from 'react';
import Bag from './bags';

import ItemsListContext from '../context/items-context';
import BagsApiService from '../context/bags-api-service';



export class BagsList extends Component {
    static contextType = ItemsListContext;

    componentDidMount() {
      this.context.clearError()
      BagsApiService.getThings()
        .then(this.context.setBagsList)
        .catch(this.context.setError)
    }

  renderBags() {
    const { bagsList = [] } = this.context;
    return bagsList.map(bag =>
      <Bag
        key={Math.random()}
        bagId={bag.bag_id}
        bagName={bag.bag_name}
      />
    )
  }

    render() {
        return (
            <div>
                {this.renderBags()}
            </div>
        )
    }
}

export default BagsList;
