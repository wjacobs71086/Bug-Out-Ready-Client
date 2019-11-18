import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ItemsListProvider } from './context/items-context'

import './index.css';
import App from './App';


ReactDOM.render(
    <BrowserRouter>
      <ItemsListProvider>
          <App />
      </ItemsListProvider>
    </BrowserRouter>,
    document.getElementById('root')
  )
