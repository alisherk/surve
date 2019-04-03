import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'; 
import { Redirect } from 'react-router-dom'; 
import Payment from '../auth/Payments';

class Dashboard extends Component {


  render() {
    if(!this.props.auth) return <Redirect to='/'/>
    if(this.props.auth.googleUsername === 'undefined' || this.props.auth.credits === 'undefined' || this.props.auth.localUsername === 'undefined') {
           return (
             <div className='container'> Loading ... </div>
           ); 
    } else {
      return (
        <div className='container'>
          <div className='card col-md-6' style={{margin:'10px auto', height:'120px'}}>
            <h3>
              Welcome <span className='text-primary'> {this.props.auth.googleUsername} {this.props.auth.localUsername} </span>
            </h3>
            <h4 className='text-secondary'>
              You have {this.props.auth.credits} credits 
            </h4>
            <div className='row m-auto'> 
                <Payment />
            </div>
          </div>
        </div>
      );
    } 
  
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Dashboard);
