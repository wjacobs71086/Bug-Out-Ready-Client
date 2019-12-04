import React, { Component } from 'react';

//---- Currently un-connected but will be a default catch page for all unaccounted for endpoints. 
export class PageNotFound extends Component {
    render() {
        return (
            <div>
                <h1>Whoops. You seem lost. Go back or try again later.</h1>
            </div>
        )
    }
}

export default PageNotFound;
