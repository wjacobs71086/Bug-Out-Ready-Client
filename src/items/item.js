import React, { Component } from 'react'
import ItemsListContext from '../context/items-context';
import './item.css';


export class item extends Component {
    static contextType = ItemsListContext;

    render() {
        
        const { itemName, itemUrl, itemImg, itemDesc, itemCost, itemOwned } = this.props;

        if(itemOwned){
            return (
            <div className='owned'>
                <h5>I  OWN THIS</h5>
                    <p>{itemName}</p>
                    <label>Owned</label>
                        <input
                            type="checkbox"
                            name={this.props.itemId}
                            checked={itemOwned}
                            value={itemOwned}
                            onChange={this.props.handleUpdate}
                        />

            </div>
        )} else {
            return (
                <div>
                    <h5>{itemName}</h5>
                        <p>{itemUrl}</p>
                        <p>{itemImg}</p>
                        <p>{itemDesc}</p>
                        <p>{itemCost}</p>
                        <p>{itemOwned}</p>
                        <label>Owned</label>
                        <input
                            type="checkbox"
                            name={this.props.itemId}
                            value={itemOwned}
                            onChange={this.props.handleUpdate}
                        />
                </div>
            )
        }
    }
}

export default item;
