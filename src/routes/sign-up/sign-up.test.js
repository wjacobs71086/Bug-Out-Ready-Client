import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SignupPage from './sign-up';
import { BrowserRouter } from 'react-router-dom'
import { ItemsListProvider } from '../../context/items-context';
import { Route } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <ItemsListProvider>
                <Route
                    component={SignupPage}
                />
            </ItemsListProvider>
        </BrowserRouter>
        , div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(        
      <BrowserRouter>
        <ItemsListProvider>
            <Route
                component={SignupPage}
            />
        </ItemsListProvider>
    </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
});