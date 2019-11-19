import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import itemListPage from './items/items-list';
import bagsListPage from './bags/bags-list';
import LandingPage from './landing-page/landing-page';
import MyBagsPage from './myBags/my-bags';
import SituationPage from './situation-page/situation-page'
import SignupPage from './sign-up/sign-up';
import BagHomePage from './bag-home-page/bag-home-page';
import PageNotFound from './404-page/page-not-found';

class App extends Component {
  render(){
  return (
    <div className="App">
        <Route
          exact
          path={'/'}
          component={LandingPage}
        />
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
        <Route
          exact
          path={'/my-bags'}
          component={MyBagsPage}
        />
        <Route
          exact
          path={'/situations'}
          component={SituationPage}
        />
        <Route
          exact
          path={'/sign-up'}
          component={SignupPage}
        />
        <Route
          exact
          path={'/bag-home/:bag_id'}
          component={BagHomePage}
        />

    </div>
  );
}
}
export default App;
