import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../../store/actions';
import { connect } from 'react-redux'; 

class Payments extends Component {
  render() {
    return (
      <div>
         <StripeCheckout 
         name='Surve'
         description='5 credits'
         amount={500}
         token={token => this.props.handleToken(token)}
         stripeKey={process.env.REACT_APP_STRIPE_KEY}
         >
         <button className='btn btn-secondary' style={{ marginRight: '3px' }}> 
          Add credits
         </button>
         </StripeCheckout>
      </div>
    );
  }
}

export default connect(null, actions)(Payments)
