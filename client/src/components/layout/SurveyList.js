import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../store/actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className='card bg-secondary' key={survey._id} style={{margin:'5px'}}>
          <div className='card-header text-white'>
            <div className='row'> 
                 <h5 className='col-md-8'> {survey.title} </h5>
                 <span className='col-md-4'> {new Date(survey.dateSent).toDateString()} </span>
            </div>
          </div>
          <div className='card-body bg-white'>
            <p> {survey.body} </p> 
            <ul className='list-group' style={{listStyleType:'none'}}> 
            <li> Yes: {survey.yes} </li>
            <li> No: {survey.no} </li>
            </ul>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}
function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
