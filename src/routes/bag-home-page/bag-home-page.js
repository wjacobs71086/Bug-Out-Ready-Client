import React, { Component } from 'react'
import './bag-home-page';
import ItemsListContext from '../../context/items-context';
import BagsApiService from '../../Services/bags-api-service';
import Item from '../../items/items-list';
import ItemsApiService from '../../Services/items-api-service';

export class BagHomePage extends Component {
    static contextType = ItemsListContext;

    componentDidMount() {

        this.context.clearError()
        BagsApiService.getBagsItems(this.props.match.params.bag_id)
        .then(this.context.setBagsList)
        .then(ItemsApiService.getThings(this.props.match.params.bag_id))
        .then(this.context.setItemsList)
        .catch(this.context.setError)

        ItemsApiService.getThings(this.props.match.params.bag_id)
        .then(this.context.setItemsList)
        .catch(this.context.setError);
    }

    renderItems() {
        const { itemsList = [], bagsList = [] } = this.context;

        console.log(itemsList, bagsList);
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
               
                <button className="signout">sign out</button>
                <button>change bag</button>
                    <img className="logo" src="../bags_bag_handbag_accessory_accessories-19-512.png" alt="bag" />
                    <h3>My Fire Bag Checklist</h3>

                    <h5>Remaining items</h5>
                    <ul className="itemList">
                        <li>Tent <span> ~ $15.00</span><img className="icon" src="../trash_icon" alt="not sure"/> </li>
                        <li>Sleeping bag <span> ~ $15.00</span></li>
                        <li>Duct Tape <span> ~ $15.00</span></li>
                        <li>Knife <span> ~ $15.00</span></li>
                    </ul>
            </div>
        )
    }
}

export default BagHomePage
