import React, { Component } from 'react';
import Bag from './bags';
import { Link } from 'react-router-dom';
import ItemsListContext from '../context/items-context';
import BagsApiService from '../Services/bags-api-service';
import BagLogo from '../bags_bag_handbag_accessory_accessories-19-512.png';
import './bags-list.css';

//----- This component provides the list of bags associated with the user. 
export class BagsList extends Component {
    static contextType = ItemsListContext;

//----- On comomponent mounting it clears errors, and makes a fetch request to GET the bags. 
    componentDidMount() {
      this.context.clearError()
      BagsApiService.getThings()
        .then(this.context.setBagsList)
        .catch(this.context.setError)
    }
    
//----- Iterate over the list of bags and return instance of Bag for each. 
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
              <img className="logo" src={BagLogo} alt="" />
                <h3 className="header">My Bags</h3>
                {this.renderBags()}
                <Link
                  to='/situations'>+ New Bag</Link>
            </div>
        )
    }
}

export default BagsList;
