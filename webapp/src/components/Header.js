
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

  renderContent(authState) {
    const googleAuthUrl = 'http://localhost:5000/auth/google';
    const googleLogout = 'http://localhost:5000/api/logout';

    if (authState.isFetchingUser) {
      return (
        <li>loading...</li>
      );
    } else if (!authState.user) {
      return (
        <li><a href={googleAuthUrl}>Login with Google</a></li>
      );
    }

    return (
      <React.Fragment>
        <li key="1">Payments</li>
        <li key="3" style={{ margin: '0 10px' }}>
          Credits: {this.props.auth.credits}
        </li>
        <li key="2"><a href={googleLogout}>Logout</a></li>
      </React.Fragment>
    );
  }


  render() {
    const { auth } = this.props
    const headerLink = auth.user ? '/surveys' : '';
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={headerLink} className="left brand-logo">Emaily</Link>
          <ul id="nav-mobile" className="right">
            {this.renderContent(auth)}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}


export default connect(mapStateToProps)(Header);