import React, { Component } from 'react'
import ItemsListContext from '../context/items-context';
import './item.css';


export class item extends Component {
    static contextType = ItemsListContext;

    render() {

        const { itemName, itemUrl, itemImg, itemDesc, itemCost, itemOwned } = this.props;

        if (itemOwned) {
            return (
                <div className='owned'>
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
            )
        } else {
            return (
                <div className='item'>
                    <div className="desc">
                        <a className="itemName" id="title" href={itemUrl} rel="noopener" target="_blank">{itemName}</a>
                        <p>Description: {itemDesc}<span className="cost"> Estimated Cost: ${itemCost}</span></p>
                        <label>Own: <input
                        type="checkbox"
                        name={this.props.itemId}
                        value={itemOwned}
                        onChange={this.props.handleUpdate}
                            /></label>
                    </div>
                    <div className="ImageContainer">
                        <img src={itemImg} alt="Item" className="imgPreview" />
                    </div>
                    

                </div>
            )
        }
    }
}

export default item;
