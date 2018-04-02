'use strict';

import React from 'react';
import { connect } from 'react-redux';

class BooksList extends React.Component {
  render() {
    const booksList = this.props.books.map(item => (
      <div key={item.id}>
        <h2>{item.title}</h2>
        <h2>{item.description}</h2>
        <h2>{item.price}</h2>
      </div>
    ));

    return (
      <div>
        <h1>Hello React</h1>
        {booksList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.books
  }
}
export default connect(mapStateToProps)(BooksList);