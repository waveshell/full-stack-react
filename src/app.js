"use strict";

import { createStore } from 'redux';

// 3. Define reducers
const reducer = (state = {}, action) => {
  switch(action.type) {
    case 'POST_BOOK':
      return state = action.payload;
  }
  return state;
}

// 1. Create store
const store = createStore(reducer);

store.subscribe(() => {
  console.log('current state is: ', store.getState());
});

// 2. Create and dispatch actions
store.dispatch({
  type: 'POST_BOOK',
  payload: {
    id: 1,
    title: 'this is the book description',
    price: 33.33
  }
});
