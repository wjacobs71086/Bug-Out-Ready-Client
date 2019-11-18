import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import itemListPage from './items/items-list';
import bagsListPage from './bags/bags-list';
class App extends Component {
  render(){
  return (
    <div className="App">
        <Route
          exact
          path={'/items'}
          component={itemListPage}
        />
        <Route
          exact
          path={'/bags'}
          component={bagsListPage}
        />
    </div>
  );
}
}
export default App;
