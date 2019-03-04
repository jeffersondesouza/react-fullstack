import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const { user, isFetchingUser } = this.props.auth;
    return !user && isFetchingUser ? (
      <div>loading</div>
    ) : (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);
