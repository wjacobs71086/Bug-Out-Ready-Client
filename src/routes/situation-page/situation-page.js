import React, { Component } from 'react';
import './situation-page.css';

export class SituationPage extends Component {
    render() {
        return (
            <div>
                <img className="logo" src="../bags_bag_handbag_accessory_accessories-19-512.png" alt="bag" />
                <h3>What type of event are you wanting to prepare for?</h3>

                <div className="selectionList">
                    <label className="selection"><input type="radio" />Fire</label>
                    <label className="selection"><input type="radio" />Flood</label>
                    <label className="selection"><input type="radio" />Quake</label>
                    <label className="selection"><input type="radio" />Anything</label>
                </div>
                
                <button>Next</button>
            </div>
        )
    }
}

export default SituationPage;
