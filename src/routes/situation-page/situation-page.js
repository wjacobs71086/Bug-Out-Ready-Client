import React, { Component } from 'react';
import './situation-page.css';
import NewBagForm from '../../NewBagForm/NewBagForm';
import BagLogo from '../../bags_bag_handbag_accessory_accessories-19-512.png';


//----- This component handles the rendering of the page for creating a new bag. 
export class SituationPage extends Component {

    render() {
        return (
            <div>
                <img className="logo" src={BagLogo} alt="bag" />
                <h3 className='situationTitle'>What type of event are you wanting to prepare for?</h3>
            <NewBagForm
                history={this.props.history}
            ></NewBagForm>
            </div>
        )
    }
}

export default SituationPage;
