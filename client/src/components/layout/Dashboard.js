import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    console.log(this.props.auth);
    return (
      <div>
        <h2> Welcome to your dashboard </h2>
      </div>
    );
  }
}

function mapStateToProps({ auth }){
  return { auth };
};

export default connect(mapStateToProps)(Dashboard);
