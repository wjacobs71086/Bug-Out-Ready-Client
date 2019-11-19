import React, { Component } from 'react';
import './my-bags.css';

export class MyBagsPage extends Component {
    render() {
        return (
            <div>
                <img className="logo" src="../bags_bag_handbag_accessory_accessories-19-512.png" alt="bag" />
                <h3 className="header">My Bags</h3>
                <label className="selection">My Fire Bag</label>
                <label className="selection">+ New Bag</label>
            </div>
        )
    }
}

export default MyBagsPage;
