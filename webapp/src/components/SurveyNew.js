import React, { Component } from 'react';
import { connect } from 'react-redux';

class SurveyNew extends Component {
  render() {
    return (
      <div>
        <h1>SurveyNew</h1>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(SurveyNew);
