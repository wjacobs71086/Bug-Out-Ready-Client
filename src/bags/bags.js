import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Bag extends Component {
    static defaultProps = {
        match: { params: {} },
      }

    render() {
        const { bagName,bagId } = this.props;
        return (
            <div>
                <Link
                    to={`/bag-home/${bagId}`}
                ><h5>{bagName}</h5>
                </Link>
                <p></p>
 
            </div>
        )
    }
}

export default Bag;
