import React, { Component } from 'react';
import './my-bags.css';

export class MyBagsPage extends Component {
    render() {
        return (
            <div>
                <img className="logo" src='' alt="bag" />
                <h3 className="header">My Bags</h3>
                <label className="selection">My Fire Bag</label>
                <label className="selection">+ New Bag</label>
            </div>
        )
    }
}

export default MyBagsPage;
