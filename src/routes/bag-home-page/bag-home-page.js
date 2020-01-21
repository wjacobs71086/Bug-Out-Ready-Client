import React, { Component } from 'react'
import './bag-home-page.css';
import ItemsListContext from '../../context/items-context';
import BagsApiService from '../../Services/bags-api-service';
import Item from '../../items/item';
import TokenService from '../../Services/token-service';
import { Link } from 'react-router-dom';


export class BagHomePage extends Component {
  static contextType = ItemsListContext;

  state = {
    ownedView: false,
  }

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

 
  handleOwnedSwitch = () => {
    this.setState({
      ownedView: !this.state.ownedView,
    })
  }

  renderLogoutLink() {
    return (
      <div className='logoutLink'>
        <Link
          onClick={this.handleLogoutClick}
          id='logoutLink'
          to='/login'>
           Logout
            </Link>
      </div>
    )
  }

  renderSwitchBagLink() {
    return (
      <div className='switchBagLink'>
        <Link
          id='switchBagLink'
          to='/bags'>
          Switch Bags
            </Link>
      </div>
    )
  }


  handleUpdate = (ev) => {
    ev.preventDefault();
    const bag_id = this.props.match.params.bag_id;
    let itemOwnedStatus = ev.target.value;
    itemOwnedStatus = (itemOwnedStatus === "true");
    let changedOwnedStatus = !itemOwnedStatus;
    const item_id = ev.target.name;
    BagsApiService.updateBagItem(bag_id, item_id, changedOwnedStatus)
      .then(response => {
        if (response) {
          BagsApiService.getBagsItems(this.props.match.params.bag_id)
            .then(res => {
              this.context.setItemsList(res)
              this.context.setBagsList(res)
            })
            .catch(this.context.setError)
        } else {
          console.log('thats a negative ghost rider');
        }
      });
  }
 
  renderBagItems() {
    const { bagsList = [] } = this.context;
    
    return bagsList.map(item => <Item
      key={Math.random()}
      ownedView={this.state.ownedView}
      itemId={item.item_id}
      itemName={item.item_name}
      itemUrl={item.url}
      itemImg={item.img}
      itemDesc={item.description}
      itemCost={item.est_cost}
      itemOwned={item.owned}
      bag_id={this.props.match.params.bag_id}
      handleUpdate={this.handleUpdate}
    />
    )

  }

  renderCostRemainingItems() {
    const { itemsList = [] } = this.context;
    let remainingCost = itemsList.reduce(function (cnt, o) {
      if (o.owned) {
        return cnt + 0;
      } else {
        return cnt + parseInt(o.est_cost);
      }
    }, 0);
    return (
      <h3> Estimated Cost for remaining items <span className='cost'>${remainingCost}</span></h3>
    )
  }

  render() {
    return (
      <div>
        <div className="headerLinks">
          {this.renderLogoutLink()}
          {this.renderSwitchBagLink()}
        </div>
         {this.renderCostRemainingItems()}
         <button 
         className='ownedButton'
         onClick={this.handleOwnedSwitch}> {this.state.ownedView ? 'View Unowned Items' : 'View Owned Items'} </button>
         <div className="itemsList">
           {this.renderBagItems()}
         </div>
      </div>
    )
  }
}

export default BagHomePage
