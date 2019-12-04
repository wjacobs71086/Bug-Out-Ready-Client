import React, { Component } from 'react'
import ItemsListContext from '../context/items-context';
import './item.css';
//----- This is a node module for hiding text based on length. 
import ReadMoreReact from 'read-more-react';


export class item extends Component {
    static contextType = ItemsListContext;

    //----- There is some conditional rendering. If in the ownedView then only items that you own should be displayed, and visa versa. 
    render() {
        let { itemName, itemUrl, itemImg, itemDesc, itemCost, itemOwned, ownedView } = this.props;
        //----- The ReadMoreReact cannot get length if it's undefined so you have to have this as a safety measure. 
        if (itemDesc == undefined) {
            itemDesc = ' ';
        }
        //----- In the owned View and the item is owned, it will be displayed. 
        if (ownedView && itemOwned) {
            return (
                <div className='item'>
                    <div className="ImageContainer">
                        <img src={itemImg} alt="Item" id="img" />
                    </div>
                    <div className="desc_container">
                        <a className="itemName" id="title" href={itemUrl} rel="noopener" target="_blank">{itemName}</a>
                        <ReadMoreReact
                            text={itemDesc}
                            className='desc'
                            min={0}
                            ideal={0}
                            max={0}
                            readMoreText='...more' />
                    </div>

                    <div className='info'>
                        <p className='cost'>Estimated Cost: ${itemCost}</p>
                        <label
                            className='owned_box'
                        >Owned</label>
                        <input
                            type="checkbox"
                            className='checkbox'
                            name={this.props.itemId}
                            checked={itemOwned}
                            value={itemOwned}
                            onChange={this.props.handleUpdate}
                        />
                    </div>
                </div>
            )
            //----- In the ownedView and the items is NOT owned, nothing is rendered. 
        } else if (ownedView && !itemOwned) {
            return (<div>
            </div>)
            //----- In the Unowned View and the item us owned, Nothing is rendered. 
        } else if (!ownedView && itemOwned) {
            return (<div>
            </div>)
            //----- Anything else the items are rendered normally.
        } else {
            return (<div className='item'>
                <div className="ImageContainer">
                    <img src={itemImg} alt="Item" id="img" />
                </div>

                <div className="desc_container">
                    <a className="itemName" id="title" href={itemUrl} rel="noopener" target="_blank">{itemName}</a>
                    <ReadMoreReact
                        className='desc'
                        text={itemDesc}
                        min={0}
                        ideal={0}
                        max={0}
                        readMoreText='...more' />
                </div>

                <div className='info'>
                    <p>Estimated Cost:  <span className='cost'>${itemCost}</span></p>
                    <label
                        className='owned_box'
                    >Own:
                    </label>
                    <input
                        type="checkbox"
                        className='checkbox'
                        name={this.props.itemId}
                        value={itemOwned}
                        onChange={this.props.handleUpdate}
                    />
                </div>
            </div>)
        }
    }
}

export default item;
