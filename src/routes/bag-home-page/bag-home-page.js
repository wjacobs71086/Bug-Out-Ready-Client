import React, { Component } from 'react'
import './bag-home-page';
import ItemsListContext from '../../context/items-context';
import BagsApiService from '../../Services/bags-api-service';
import Item from '../../items/item';
//import ItemsApiService from '../../Services/items-api-service';
import TokenService from '../../Services/token-service';
import { Link } from 'react-router-dom';
//import { thisExpression, isTSAnyKeyword } from '@babel/types';

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
        // if OWNED is true then do no render
        return bagsList.map(item => <Item
            key={Math.random()}
            itemId={item.item_id}
            itemName={item.item_name}
            itemUrl={item.url}
            itemImg={item.img}
            itemDesc={item.description}
            itemCost={item.est_cost}
            itemOwned={item.owned}
        />)
    }

    renderCostRemainingItems(){
      const { itemsList = []} = this.context;
      //console.log('inside the cost remaining function',itemsList);
      //a.reduce( function(cnt,o){ return cnt + o.level; }, 0)
      let remainingCost = itemsList.reduce(function(cnt, o){ return cnt + parseInt(o.est_cost); }, 0);

      //console.log(remainingCost);
      return (
      <h4> Estimated Cost for remaining items ${remainingCost}</h4>
      )
    }

    render() {
      const { bagName, bagId } = this.props;
      console.log(this.context);
        return (
            <div>
                {this.renderCostRemainingItems()}
                {this.renderLogoutLink()}
                {this.renderSwitchBagLink()}
                <img className="logo" src="../bags_bag_handbag_accessory_accessories-19-512.png" alt="bag" />
                {this.renderBagItems()}
            </div>
        )
    }
}

export default BagHomePage
