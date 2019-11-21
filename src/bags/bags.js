import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import BagsApiService from '../Services/bags-api-service';

export class Bag extends Component {
    static defaultProps = {
        match: { params: {} },
      }

    handleDeleteBag(id){
        const bag_id = id.target.value;
        console.log('this is the bag_id to delete',  bag_id);
        BagsApiService.deleteBag(bag_id);
      }

    render() {
        //console.log(this.props);
        const { bagName, bagId } = this.props;
        //console.log(this.props.bagId);
        return (
            <div>
                <Link
                    to={`/bag-home/${bagId}`}
                ><h5>{bagName}</h5>
                </Link>
        <button
            value={bagId}
            onClick={this.handleDeleteBag}
            >Delete {bagName}
        </button>
 
            </div>
        )
    }
}

export default Bag;
