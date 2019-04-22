import React from 'react';

const SurveyField = ({ input, label, meta: { error, touched } }) => {

  return (
    <div>
      <label className='col-sm-2 col-form-label'> { label } </label>
      <div className='col-sm-10'> 
      <input className='form-control' {...input} />
      <div className='text-danger'> { touched && error } </div> 
      </div>
    </div>
  );
}
export default SurveyField;

