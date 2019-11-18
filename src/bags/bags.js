import React, { Component } from 'react'

export class Bag extends Component {
    render() {
        const { bagName  } = this.props;
        return (
            <div>
                <h5>{bagName}</h5>
                <p></p>
 
            </div>
        )
    }
}

export default Bag;
