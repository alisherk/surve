import React from 'react'; 
import { connect } from 'react-redux';
import formFields from '../../utils/formFields';
import * as actions from '../../store/actions/index';
import { withRouter } from 'react-router-dom'; 

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
 
    const fieldList = formFields.map(({ id, label, name }) => {
        return (
          <div key={id}> 
              <label> {label} </label>
              <div className='form-control'> 
                  {formValues[name]}
              </div>
          </div>
        );
    });
 
  return (
    <div className='container' style={{ marginTop: '2rem' }}>
       <h5 className='text-center text-danger'> Please confirm your entry </h5>
       {fieldList}
       <div className='btn-group' style={{ marginTop: '2rem' }}> 
       <button
        className='btn btn-secondary'
        onClick={onCancel}
       >
        Back
      </button> 
      <button 
      onClick={() => submitSurvey(formValues, history)}
      className='btn btn-primary'style={{ marginLeft: '2px' }}> 
          Submit
      </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
    return {
       formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
