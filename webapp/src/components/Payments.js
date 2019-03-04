import React, { Component } from 'react';
import StriperCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

class Payments extends Component {
  handleToken = token => {
    this.props.handleToken();
  };

  render() {
    console.log(this.props);
    const stripeKey = process.env.REACT_APP_STRIPE_KEY;

    return (
      <StriperCheckout
        name="Emaily"
        description="$5,00 for 5 emails"
        amount={500}
        token={this.handleToken}
        stripeKey={stripeKey}
      >
        <button className="btn">Add Credits</button>
      </StriperCheckout>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  actions
)(Payments);
