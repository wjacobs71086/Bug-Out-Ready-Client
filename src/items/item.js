import React, { Component } from 'react'

export class item extends Component {
    render() {
        const { itemName, itemUrl, itemImg, itemDesc, itemCost } = this.props;
        console.log(this.props.item);

        return (
            <div>
                <h5>{itemName}</h5>
                    <p>{itemUrl}</p>
                    <p>{itemImg}</p>
                    <p>{itemDesc}</p>
                    <p>{itemCost}</p>
            </div>
        )
    }
}

export default item;
