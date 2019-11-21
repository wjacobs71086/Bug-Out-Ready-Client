import React, { Component } from 'react';
//import './situation-page.css';
import NewBagForm from '../../NewBagForm/NewBagForm';

export class SituationPage extends Component {

    render() {
        return (
            <div>
                <img className="logo" src="../bags_bag_handbag_accessory_accessories-19-512.png" alt="bag" />
                
                <h3>What type of event are you wanting to prepare for?</h3>
            <NewBagForm
                history={this.props.history}
            ></NewBagForm>
            </div>
        )
    }
}

export default SituationPage;
