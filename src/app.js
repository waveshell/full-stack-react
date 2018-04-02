'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers/index';
import { addToCart } from './actions/cartActions';
import { postBooks, updateBooks, deleteBooks } from './actions/bookActions';
import logger from 'redux-logger';
import BooksList from './components/pages/bookslist';

const middleware = applyMiddleware(logger);

// 1. Create store
const store = createStore(reducers, middleware);

render(
  <Provider store={store}>
    <BooksList/>
  </Provider>, document.getElementById('app')
);

// 2. Create and dispatch actions
store.dispatch(postBooks(
  [{
    id: 1,
    title: 'this is the book title 1',
    description: 'this is the book description',
    price: 33.33
  },
  {
    id: 2,
    title: 'title 2',
    description: 'this is the second book description',
    price: 50
  }]
));

// store.dispatch(deleteBooks(
//   {
//     id: 1
//   }
// ));

// store.dispatch(updateBooks(
//   {
//     id: 2,
//     title: 'Learn React in 24h'
//   }
// ));

// store.dispatch(addToCart([{id: 1}]));
