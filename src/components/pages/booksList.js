'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from '../../actions/booksActions';
import { Grid, Col, Row, Button } from 'react-bootstrap';

class BooksList extends React.Component {
  componentDidMount() {
    // Dispatch an action
    this.props.getBooks();
  }
  render() {
    const booksList = this.props.books.map(item => (
      <div key={item.id}>
        <h2>{item.title}</h2>
        <h2>{item.description}</h2>
        <h2>{item.price}</h2>
        <Button bsStyle='primary'>Buy now</Button>
      </div>
    ));

    return (
      <Grid>
        <Row style={{ marginTop: '15px' }}>
          {booksList}
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getBooks: getBooks
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);