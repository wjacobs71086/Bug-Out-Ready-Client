import React, { Component } from 'react'
import ItemsListContext from '../context/items-context';
import './item.css';
import ReadMoreReact from 'read-more-react';


export class item extends Component {
    static contextType = ItemsListContext;

    render() {
        const { itemName, itemUrl, itemImg, itemDesc, itemCost, itemOwned, ownedView } = this.props;
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
                        readMoreText='...more'/>
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
        } else if (ownedView && !itemOwned) {
            return (<div>

            </div>)
        } else if (!ownedView && itemOwned) {
            return (<div>
            </div>)
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
                        readMoreText='...more'/>
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
