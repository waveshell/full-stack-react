"use strict";

import React from "react";
import { connect } from "react-redux";
import { Panel, Col, Row, Well, Button } from "react-bootstrap";
import { bindActionCreators } from "../../../../../../Library/Caches/typescript/2.8/node_modules/redux";

class Cart extends React.Component {
  render() {
    if (this.props.cart[0]) {
      return this.renderCart();
    } else {
      return this.renderEmpty();
    }
  }

  renderCart() {
    const cartItemsList = this.props.cart.map(function(cartItem) {
      return (
        <Panel key={cartItem.id}>
          <Row>
            <Col xs={12} sm={4}>
              <h6>{cartItem.title}</h6>
            </Col>
          </Row>
        </Panel>
      );
    });

    return (
      <Panel header="Cart" bsStyle="primary">
        {cartItemsList}
      </Panel>
    );
  }

  renderEmpty() {
    return <div />;
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addToCart: addToCart
    },
    dispatch
  );
}
export default connect(mapStateToProps)(Cart);
