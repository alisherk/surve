import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails  from '../../utils/validateEmail';
import formFields from '../../utils/formFields';

class SurveyForm extends Component {
  renderFields() {
    return formFields.map(({ label, name, id }) => {
      return (
        <Field
          component={SurveyField}
          type='text'
          label={label}
          name={name}
          key={id}
        />
      );
    });
  }

  render() {
    return (
      <div className='container' style={{ marginTop: '2rem' }}>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <div className='btn-group' style={{ margin: '10px 10px' }}>
          <Link
              to='/dashboard'
              className='btn btn-secondary'
            >
              Back
            </Link>
            <button className='btn btn-secondary' 
            type='submit'
            style={{ marginLeft: '3px'}}
            >
              Next
            </button>
           
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  errors.recipients = validateEmails(values.recipients || '');
  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm', 
  destroyOnUnmount: false,
})(SurveyForm);
