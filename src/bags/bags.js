import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import BagsApiService from '../Services/bags-api-service';
import trashIcon from '../trash_icon.png';
import ItemsListContext from '../context/items-context'; 

export class Bag extends Component {
    static contextType = ItemsListContext;
    static defaultProps = {
        match: { params: {} },
      }

    handleDeleteBag=(id) => {
        const bag_id = id.target.value;
        console.log('this is the bag_id to delete',  bag_id);
        BagsApiService.deleteBag(bag_id)
        .then(response => {
            BagsApiService.getThings()
            .then(this.context.setBagsList)
            .catch(this.context.setError)
        });;
    }

    render() {
        const { bagName, bagId } = this.props;
        return (
            <div className='bag'>
                <Link
                    to={`/bag-home/${bagId}`}>
                        <h5 className='bagTitle'>{bagName}</h5>
                </Link>
                <button
                    className="deleteButton"
                    value={bagId}
                    onClick={this.handleDeleteBag}
                    >Delete <br></br>{bagName}
                </button>
            </div>
        )
    }
}

export default Bag;
