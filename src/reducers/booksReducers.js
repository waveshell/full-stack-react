'use strict';

export function booksReducers(state = { books: [] }, action) {
  switch (action.type) {
    case 'POST_BOOK':
      // let books = state.books.concat(action.payload);
      return { books: [...state.books, ...action.payload] };
    case 'DELETE_BOOK':
      const copyOfBooksToDelete = [...state.books];
      const indexOfBookToDelete = copyOfBooksToDelete.findIndex(book => book.id === action.payload.id); //improve for deep clone
      return { books: [...copyOfBooksToDelete.slice(0, indexOfBookToDelete), ...copyOfBooksToDelete.slice(indexOfBookToDelete + 1)] };
    case 'UPDATE_BOOK':
      const copyOfBooksToUpdate = [...state.books];
      const indexOfBookToUpdate = copyOfBooksToUpdate.findIndex(book => book.id === action.payload.id); //improve for deep clone
      const bookToUpdate = {
        ...copyOfBooksToUpdate[indexOfBookToUpdate],
        title: action.payload.title
      };
      return { books: [...copyOfBooksToUpdate.slice(0, indexOfBookToUpdate), bookToUpdate, ...copyOfBooksToUpdate.slice(indexOfBookToUpdate + 1)] };
    default: return state;
  }
};