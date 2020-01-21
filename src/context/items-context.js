import React, { Component } from 'react';


const ItemsListContext = React.createContext({
  itemsList: [],
  bagsList: [],
  userId: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setItemsList: () => {},
  setBagsList: () => {},
})
export default ItemsListContext

export class ItemsListProvider extends Component {
  state = {
    itemsList: [],
    bagsList: [],
    error: null,
  };

  setItemsList = itemsList => {
    this.setState({ itemsList })
  }

  setBagsList = bagsList => {
    this.setState({ bagsList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      itemsList: this.state.itemsList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setItemsList: this.setItemsList,
      setBagsList: this.setBagsList,
      bagsList: this.state.bagsList,
      userId: this.state.userId,
    }
    return (
      <ItemsListContext.Provider value={value}>
        {this.props.children}
      </ItemsListContext.Provider>
    )
  }
}