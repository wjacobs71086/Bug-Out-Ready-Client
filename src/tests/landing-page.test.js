import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ItemsListProvider } from '../context/items-context';
import LandingPage from '../routes/landing-page/landing-page';


it('renders without crashing', () => {
    const div = document.createElement('div');
    
    ReactDOM.render(
      <BrowserRouter>
        <ItemsListProvider>
          <LandingPage />
        </ItemsListProvider>
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });