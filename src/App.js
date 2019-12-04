import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import itemListPage from './items/items-list';
import bagsListPage from './bags/bags-list';
import LandingPage from './routes/landing-page/landing-page';
import SituationPage from './routes/situation-page/situation-page'
import SignupPage from './routes/sign-up/sign-up';
import BagHomePage from './routes/bag-home-page/bag-home-page';
import LoginPage from '../src/routes/LoginPage/LoginPage';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute'

class App extends Component {
  render(){
  return (
    <div className="App">
      <Switch>
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
        <PrivateRoute
          exact
          path={'/bags'}
          component={bagsListPage}
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
        <PublicRoute
          exact
          path={'/login'}
          component={LoginPage}
        />
        <PrivateRoute
          exact
          path={'/bag-home/:bag_id'}
          component={BagHomePage}
        />
</Switch>
    </div>
  );
}
}
export default App;
