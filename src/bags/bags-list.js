import React, { Component } from 'react';
import Bag from './bags';
import { Link } from 'react-router-dom';
import ItemsListContext from '../context/items-context';
import BagsApiService from '../Services/bags-api-service';
import BagLogo from '../bags_bag_handbag_accessory_accessories-19-512.png';
import './bags-list.css';
import loadingGif from '../BugoutProgressBar.gif';

export class BagsList extends Component {
    static contextType = ItemsListContext;

    state= {
      loading: false
    }

    componentDidMount() {
      this.context.clearError()
      
      this.setState({
        loading: true
      })
      BagsApiService.getThings()
        .then(this.context.setBagsList)
        .catch(this.context.setError)
      return setTimeout(() => {
        this.setState({
          loading: false
        })
      }, 3000)
    }
    
  renderBags() {
    const { bagsList = [] } = this.context;
    if(this.state.loading === true){
      return(
        <div className='loadingContainer'>
          <img src={loadingGif} alt='loading bar' className='loadingGif'/>
        </div>
      )
    } else {
      return bagsList.map(bag =>
      <Bag
        key={Math.random()}
        bagId={bag.bag_id}
        bagName={bag.bag_name}
      />
    )
    }
  }

    render() {
        return (
            <div>
              <img className="logo" src={BagLogo} alt="" />
                <h3 className="header">My Bags</h3>
                {this.renderBags()}
                <Link
                  id='newBagLink'
                  to='/situations'>+ New Bag</Link>
            </div>
        )
    }
}

export default BagsList;
