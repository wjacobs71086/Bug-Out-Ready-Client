import React, { Component } from 'react'
import './bag-home-page';
import ItemsListContext from '../../context/items-context';
import BagsApiService from '../../Services/bags-api-service';
import Item from '../../items/item';
import ItemsApiService from '../../Services/items-api-service';
import TokenService from '../../Services/token-service';
import { Link } from 'react-router-dom';

export class BagHomePage extends Component {
    static contextType = ItemsListContext;

    componentDidMount() {

        this.context.clearError();
        BagsApiService.getBagsItems(this.props.match.params.bag_id)
            .then(res => {
                this.context.setItemsList(res)
                this.context.setBagsList(res)
            })
            .catch(this.context.setError)

    }
    handleLogoutClick = () => {
        TokenService.clearAuthToken();
    }

    renderLogoutLink() {
        return (
          <div className='Heading_links'>
            <Link
              onClick={this.handleLogoutClick}
              to='/login'>
              Logout
            </Link>
          </div>
        )
      }
      renderSwitchBagLink() {
        return (
          <div className='Heading_links'>
            <Link
              to='/bags'>
              Switch Bag
            </Link>
          </div>
        )
      }

    renderBagItems() {
        const { bagsList = [] } = this.context;
        //console.log(bagsList);

        return bagsList.map(item => <Item
            key={Math.random()}
            itemId={item.id}
            itemName={item.item_name}
            itemUrl={item.url}
            itemImg={item.img}
            itemDesc={item.description}
            itemCost={item.est_cost}
        />)
    }



    render() {
        return (
            <div>
                {this.renderLogoutLink()}
                {this.renderSwitchBagLink()}
                <img className="logo" src="../bags_bag_handbag_accessory_accessories-19-512.png" alt="bag" />
                {this.renderBagItems()}
            </div>
        )
    }
}

export default BagHomePage
