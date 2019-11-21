import React, { Component } from 'react'
import ItemsListContext from '../context/items-context';

export class item extends Component {
    static contextType = ItemsListContext;

    render() {
        
        const { itemName, itemUrl, itemImg, itemDesc, itemCost, itemOwned } = this.props;
        //console.log(itemOwned);

        return (
            <div>
                <h5>{itemName}</h5>
                    <p>{itemUrl}</p>
                    <p>{itemImg}</p>
                    <p>{itemDesc}</p>
                    <p>{itemCost}</p>
                    <p>{itemOwned}</p>
            </div>
        )
    }
}

export default item;
