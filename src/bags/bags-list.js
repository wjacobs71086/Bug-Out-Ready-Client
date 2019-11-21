import React, { Component } from 'react';
import Bag from './bags';
import { Link } from 'react-router-dom';
import ItemsListContext from '../context/items-context';
import BagsApiService from '../Services/bags-api-service';



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
              <img className="logo" src="../bags_bag_handbag_accessory_accessories-19-512.png" alt="bag" />
                <h3 className="header">My Bags</h3>
                {this.renderBags()}
                <Link
                  to='/situations'>+ New Bag</Link>
            </div>
        )
    }
}

export default BagsList;
