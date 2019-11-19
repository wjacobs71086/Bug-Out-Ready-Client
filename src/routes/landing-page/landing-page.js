import React, { Component } from 'react';
import './landing-page.css';
import {Link} from 'react-router-dom';

export class LandingPage extends Component {
    render() {
        return (
            <div>
                <img className="logo" src="../bags_bag_handbag_accessory_accessories-19-512.png" alt="bag" />
            <h1 className="header">Bug Out Ready</h1>
                <p>You can't plan for everything in life but you should be ready for as much as possible. To take care of yourself or your family.</p>
                <p>Use this app to help build a bag known as a "bugout" bag to grab in the event of an emergency or natural disaster. This will help se you and your family up fo success in a time of need. </p>
                <Link to='/login'>Get started</Link>
                 
            </div>
        )
    }
}

export default LandingPage;
