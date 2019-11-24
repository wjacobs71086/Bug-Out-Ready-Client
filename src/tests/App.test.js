import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { BrowserRouter } from 'react-router-dom'
import { ItemsListProvider } from '../context/items-context'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ItemsListProvider>
        <App />
      </ItemsListProvider>
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
