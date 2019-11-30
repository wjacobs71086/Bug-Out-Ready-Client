import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import BagsApiService from '../Services/bags-api-service';
import trashIcon from '../trash_icon.png';
import ItemsListContext from '../context/items-context';
import swal from 'sweetalert';

export class Bag extends Component {
    static contextType = ItemsListContext;
    static defaultProps = {
        match: { params: {} },
    }

    handleDeleteBag = (id) => {
        const bag_id = id.target.value;
        // eslint-disable-next-line no-restricted-globals
        swal('Are you sure? This cannot be undone.', {
            dangerMode: true,
            buttons: true,
        }).then(res => {
            if (res) {
                BagsApiService.deleteBag(bag_id)
                    .then(response => {
                        BagsApiService.getThings()
                            .then(this.context.setBagsList)
                            .catch(this.context.setError)
                    });;
            }
        });
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
