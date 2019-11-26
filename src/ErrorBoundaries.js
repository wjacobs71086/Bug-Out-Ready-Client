import React, { Component } from 'react'
import './ErrorBoundaries.css';
import ItemsListContext from './context/items-context';

export class ErrorBoundaries extends Component {
    static contextType = ItemsListContext;

  render() {
    if (this.context.hasError) {      
      return (
        <div>
          <h2>Something went wrong. Please refresh and try again.</h2>
        </div>
      );
    }
    return this.context.children;
  }  
}

export default ErrorBoundaries
