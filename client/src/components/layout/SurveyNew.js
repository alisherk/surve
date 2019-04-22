import React, { Component } from 'react'
import SurveyForm from '../form/SurveyForm'; 
import SurveyFormReview from '../form/SurveyFormReview';
import { reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom'; 


class SurveyNew extends Component {

 state = { 
   showFormReview: false 
  }

 renderContent() { 
  if (this.state.showFormReview) {
    return <SurveyFormReview onCancel={() => this.setState({ showFormReview:false })} /> 
  } 
  return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview:true })} /> 
 }
  render() {
    if(!this.props.isAuthenticated) return <Redirect to='/'/>
    return (
      <div className='container'>
       {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({form: 'surveyForm'})(SurveyNew);
