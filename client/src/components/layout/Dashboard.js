import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Payment from '../auth/Payments';
import { Link } from 'react-router-dom';
import SurveyList from '../layout/SurveyList';

class Dashboard extends Component {

  render() {
     
    if(!this.props.auth) return <Redirect to='/' /> 
  
    if (
      this.props.auth.googleUsername === 'undefined' ||
      this.props.auth.credits === 'undefined' ||
      this.props.auth.localUsername === 'undefined'
    ) {
      return <div className='container'> Loading ... </div>;
    } else {
      return (
        <div className='container' style={{ margin: '10px 10px' }}>
          <div className='row'>
            <div className='col-md-6 col-sm-12'>
              <div className='card'>
                <h5 className='card-header'>
                  Welcome <span className='text-primary'>
                    {this.props.auth.googleUsername}
                    {this.props.auth.localUsername}
                  </span>
                </h5>
                <div className='card-body'>
                  <h5 className='card-text'>
                    {this.props.auth.credits === 1
                      ? `You have ${this.props.auth.credits} credit`
                      : `You have ${this.props.auth.credits} credits`}
                  </h5>

                  <div className='btn-group pull-right row'>
                    <Payment />
                    <Link to='/surveys/new' className='btn btn-secondary'>
                      New survey
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <SurveyList />
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

export default connect(
  mapStateToProps,
)(Dashboard);
