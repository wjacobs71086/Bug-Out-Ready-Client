import React, { Component } from 'react';
import './situation-page.css';
import NewBagForm from '../../NewBagForm/NewBagForm';
import BagLogo from '../../bags_bag_handbag_accessory_accessories-19-512.png';


export class SituationPage extends Component {

    render() {
        return (
            <div>
                <img className="logo" src={BagLogo} alt="bag" />
                <h3 className='situationTitle'>Create a new bag</h3>
            <NewBagForm
                history={this.props.history}
            ></NewBagForm>
            </div>
        )
    }
}

export default SituationPage;
